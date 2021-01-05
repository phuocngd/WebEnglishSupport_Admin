import React, { lazy, useState, useEffect } from 'react';
import {
  CButton,
  CCol,
  CLabel,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CRow,
  CContainer
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';
import Icon from '@mdi/react';
import { useHistory } from 'react-router-dom';
import CreateExam from './CreateExam';
import { axiosGet } from '../../../axios/axios';
import AllPagesPDFViewer from './AllPages';
import samplePDF from './RC.pdf';
const EditFullExam = props => {
  const history = useHistory();
  const [fullexam, setFullExam] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  let data;
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const reqModel = {
        url: `http://localhost:9999/api/fullexam/${props.match.params.id}`
      };
      const response = await axiosGet(reqModel);
      if (!cancelled && response) {
         data  = response.data;
        if (data) {
          setTitle(data.title);
          setDescription(data.description);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return (
    <>
      <h3>Cập nhật đề thi</h3>
      <form>
        <CContainer>
          <CCol lg='12'>
            <CRow>
              <CCol md='5' className='my-3'>
                <CLabel htmlFor='text-title'>Tên đề thi</CLabel>
              </CCol>
              <CCol xs='12' md='7'>
                <input
                  type='text'
                  value={title}
                  autoComplete='title'
                  required
                  onChange={e => {
                    setTitle(e.target.value);
                  }}
                />
              </CCol>
              <CCol md='5'>
                <CLabel htmlFor='text-description'>Mô tả</CLabel>
              </CCol>
              <CCol xs='12' md='7'>
                <input
                  type='description'
                  className='description_input'
                  value={description}
                  autoComplete='description'
                  onChange={e => {
                    setDescription(e.target.value);
                  }}
                />
              </CCol>
            </CRow>
          </CCol>
          <CRow className="mx-3">
            <CCol md='6'>
              <h3 htmlFor='text-description'>Đề thi nghe</h3>
            </CCol>
            <CCol md='6'>
              <h3 htmlFor='text-description'>Đề thi đọc</h3>
            </CCol>
          </CRow>
          <CRow>
            <CCol md='6'>
              <div className='all-page-container'>
                <AllPagesPDFViewer
                  file={{
                    url: `http://localhost:9999/api/exam/${props.match.params.id}/pdf/LC`
                  }}
                />
              </div>{' '}
            </CCol>
            <CCol>
              <div className='all-page-container'>
                <AllPagesPDFViewer
                  file={{
                    url: `http://localhost:9999/api/exam/${props.match.params.id}/pdf/RC`
                  }}
                />
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </form>
    </>
  );
};

export default EditFullExam;
