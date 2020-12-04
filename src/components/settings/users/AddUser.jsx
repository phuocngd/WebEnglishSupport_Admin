import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { validate } from 'email-validator';
import useEncrypt from '../../../components/hook/useEncrypt';
import { axiosPost } from '../../../axios/axios';

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { signupRequest } from '../../../Store/slice/authenticationSlice';

const CreateUser = () => {
  const [mahoa] = useEncrypt();
  const dispatch = useDispatch();
  let fullnameRef = useRef();
  let emailRef = useRef();
  let password = useRef();

  const handleCreateAccount = async () => {
    if (!fullnameRef.current.value || !emailRef.current.value) return null;

    if (!validate(emailRef.current.value)) {
      alert('Email không hợp lệ');
      return null;
    }

    const filterModel = {
      fullname: mahoa(fullnameRef.current.value),
      email: mahoa(emailRef.current.value),
      password: mahoa('123456'),
      url: 'http://localhost:9999/signup'
    };
    const res = await axiosPost(filterModel);
    if (res) {
      alert('Tạo tài khoản thành công');
    } else {
      alert('Tạo tài khoản không thành công');
    }
    // dispatch(signupRequest(filterModel))
  };

  return (
    <div>
      <CCard>
        <CCardHeader className='users-title'>THÊM TÀI KHOẢN ADMIN</CCardHeader>
        <CCardBody className='users-content'>
          <CForm className='form-horizontal'>
            <CFormGroup row>
              <CCol md='3'>
                <CLabel htmlFor='text-fullname'>Fullname</CLabel>
              </CCol>
              <CCol xs='12' md='9'>
                <input
                  ref={fullnameRef}
                  type='text'
                  placeholder='Fullname'
                  autoComplete='fullname'
                  required
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
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
            </CFormGroup>
            <CButton
              type='submit'
              size='sm'
              className='users-content-btn'
              color='primary'
              variant='outline'
              onClick={handleCreateAccount}>
              Thêm mới
            </CButton>

            <CButton
              type='submit'
              size='sm'
              variant='outline'
              color='danger'
              className='users-content-btn'>
              Hủy
            </CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default CreateUser;
