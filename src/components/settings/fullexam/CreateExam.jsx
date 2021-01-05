import React, { useEffect, useState } from 'react';
import { CButton, CCol, CLabel, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { postExamRequest, addExam } from '../../../Store/slice/examSlide';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { axiosPost } from '../../../axios/axios';
import Questions from './Questions';
import axios from 'axios';
// import Dropzone from 'react-dropzone';

const CreateExam = props => {
  const history = useHistory();
  const { type, isSubmit, id } = props;
  const [file, setFiles] = useState([]);

  const handleChange = e => {
    setFiles([...e.target.files]);
    console.log(e.target.files.length)
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('type', type);
    for (let i = 0; i < file.length; i++) {
      formData.append('file', file[i]);
    }
    try {
      const res = await axios.post(
        `http://localhost:9999/api/fullexam/${id}/exam`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      if (res) {
        console.log(res.data)
        history.push('/DeThi');
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (isSubmit && id) {
    handleSubmit();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CCol className='my-3' lg='12'>
          <h4 htmlFor='text-title'>Đề thi {type}</h4>

          <CRow>
            {type === 'Listening' ? (
              <>
                <CCol md='5'>
                  <CLabel htmlFor='text-description'>File PDF và audio {type} </CLabel>
                </CCol>
                <CCol xs='12' md='7' className='mb-3'>
                  <input multiple type='file' id={1} onChange={handleChange} />
                  <required />
                </CCol>
              </>
            ) : (
              <>
                <CCol md='5'>
                  <CLabel htmlFor='text-description'>File PDF {type} </CLabel>
                </CCol>
                <CCol xs='12' md='7' id={3} className='mb-3'>
                  <input type='file' onChange={handleChange} />
                  <required />
                </CCol>
              </>
            )}
          </CRow>
        </CCol>
      </form>
    </>
  );
};

export default CreateExam;
