import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useEncrypt from '../../hook/useEncrypt';
import { axiosPost } from '../../../axios/axios';
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
import axios from 'axios'
const CreateAdmin = props => {
  const [encrypt] = useEncrypt();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  let fullnameRef = useRef();
  let emailRef = useRef();
  let password = encrypt('123456');
  let ruleAdmin = encrypt('3');
  const onSubmit = async e => {
    e.preventDefault();
    try {
      const input = {
        fullname: encrypt(fullnameRef.current.value),
        email: encrypt(emailRef.current.value),
        password: password,
        rule: ruleAdmin
      };
      const url = 'http://localhost:9999/api/account/createAdmin';

      const response = await axios.post(url, input);
      console.log(response);
      props.toggleModal();
      props.createSuccess();
    } catch (err) {
      console.log(err);
      alert('Vui lòng tạo lại');
    }
    setSuccess(false);
    setLoading(false);
  };

  return (
    <>
      <CModal show={props.modal} onClose={props.toggleModal} size='l'>
        <CModalHeader closeButton>
          {' '}
          <h3>Thêm mới admin</h3>
        </CModalHeader>
        <form onSubmit={onSubmit}>
          <CModalBody>
            <CContainer>
              <CRow>
                <CCol lg='6'>
                  <CRow>
                    <CCol md='3' className='my-3'>
                      <CLabel htmlFor='text-fullname'>Họ tên</CLabel>
                    </CCol>
                    <CCol xs='12' md='9'>
                      <input
                        ref={fullnameRef}
                        type='text'
                        placeholder='Họ tên'
                        autoComplete='fullname'
                        required
                      />
                    </CCol>
                    <CCol md='3'>
                      <CLabel htmlFor='text-email'>Email</CLabel>
                    </CCol>
                    <CCol xs='12' md='9'>
                      <input
                        ref={emailRef}
                        type='email'
                        className='email_input'
                        placeholder='Email'
                        autoComplete='email'
                        required
                      />
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CContainer>
          </CModalBody>
          <CModalFooter>
            <CButton color='primary' type='submit'>
              Thêm mới
            </CButton>{' '}
            <CButton color='secondary' onClick={props.toggleModal}>
              Bỏ qua
            </CButton>
          </CModalFooter>
        </form>
      </CModal>
    </>
  );
};

export default CreateAdmin;
