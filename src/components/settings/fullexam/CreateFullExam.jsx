import React, { useEffect, useState } from 'react';
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
import { useHistory } from 'react-router-dom';
import { axiosPost } from '../../../axios/axios';
import Questions from './Questions';
import axios from 'axios';
import CreateExam from './CreateExam';

const CreateFullExam = props => {
  // data
  const history = useHistory();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [id, setId] = useState(null);
  const onSubmitFullExam = async () => {
    try {
      setIsSubmit(true);
      const filterModel = {
        title: title,
        description: description,
        url: 'http://localhost:9999/api/fullexam/'
      };
      const res = await axiosPost(filterModel);
      if (res) {
        console.log(res.data)
        setId(res.data._id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3>Thêm mới bộ đề thi</h3>
      <form onSubmit={onSubmitFullExam}>
        <CContainer>
          <CCol lg='12'>
            <CRow>
              <CCol md='5' className='my-3'>
                <CLabel htmlFor='text-title'>Tên đề thi</CLabel>
              </CCol>
              <CCol xs='12' md='7'>
                <input
                  type='text'
                  placeholder='Tên đề thi'
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
                  placeholder='Mô tả'
                  autoComplete='description'
                  onChange={e => {
                    setDescription(e.target.value);
                  }}
                  required
                />
              </CCol>
            </CRow>
          </CCol>
          <CreateExam type='Listening' id={id} isSubmit={isSubmit} />
          <CreateExam type='Reading' id={id} isSubmit={isSubmit} />
          <CButton color='primary' type='submit' id='next'>
            Thêm
          </CButton>
          <CButton color='secondary' onClick={props.toggleModal}>
            Bỏ qua
          </CButton>
        </CContainer>
      </form>
    </>
  );
};

export default CreateFullExam;
