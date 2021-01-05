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
  const [isSubmit, setIsSubmit] = useState(false);
  const [id, setId] = useState(null);
  const handleSubmit = () => {};
  const handleChange = () => {};
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const reqModel = {
        url: `http://localhost:9999/api/fullexam/${props.match.params.id}`
      };
      const response = await axiosGet(reqModel);
      if (!cancelled && response) {
        const { data } = response;
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
      <form onSubmit={handleSubmit}>
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
          <CRow>
            <CCol md='5' className='my-3'>
              <div className='all-page-container'>
                <AllPagesPDFViewer pdf={samplePDF} />
              </div>{' '}
            </CCol>
            <CCol>
              <div className='all-page-container'>
                <AllPagesPDFViewer pdf={samplePDF} />
              </div>
            </CCol>
          </CRow>
          <CreateExam type='Reading' id={id} isSubmit={isSubmit} />
          <h4>All Pages</h4>

          <CButton color='primary' type='submit' id='next'>
            Thêm
          </CButton>
          {/* <CButton color='secondary' onClick={props.toggleModal}>
            Bỏ qua
          </CButton> */}
        </CContainer>
      </form>
    </>
  );
};

export default EditFullExam;
