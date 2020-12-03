import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { validate } from 'email-validator';
import useEncrypt from '../../hook/useEncrypt';
import { axiosPost } from '../../../axios/axios';

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CContainer,
  CLink
} from '@coreui/react';
import { getValueRef } from '../../../share/commonFunc';

const Profile = () => {
  const dispatch = useDispatch();
  const [isViewMode, setIsViewMode] = React.useState(true);
  const [mahoa] = useEncrypt();

  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleMode = () => {
    setIsViewMode(false);
  };
  const handleCancel = () => {
    setIsViewMode(true);
  };
  const handleSave = async () => {
    const fullName = getValueRef(fullNameRef);
    if (!fullName) {
      alert('nhập đầy đủ họ tên và email');
      return null;
    }

    const updateModel = {
      fullName: mahoa(fullName),
      password: mahoa('123456'),
      url: 'http://localhost:9999/signup'
    };

    const res = await axiosPost(updateModel);
    if (res) {
      alert('update tài khoản thành công');
    } else {
      alert('update tài khoản không thành công');
    }
    setIsViewMode(true);
  };
  return (
    <CContainer>
      <CCard>
        <CCardHeader>
          THÔNG TIN CÁ NHÂN
          {isViewMode && (
            <CButton size='sm' color='danger' onClick={handleMode}>
              Action
            </CButton>
          )}
        </CCardHeader>

        <CCardBody>
          <CForm className='form-horizontal'>
            <CFormGroup row>
              <CCol md='3'>
                <CLabel htmlFor='text-fullname'>Fullname</CLabel>
              </CCol>
              <CCol xs='12' md='6'>
                <input
                  ref={fullNameRef}
                  type='text'
                  placeholder='Fullname'
                  autoComplete='fullname'
                  disabled={isViewMode}
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md='3'>
                <CLabel htmlFor='text-password'>Password</CLabel>
              </CCol>
              <CCol xs='12' md='6'>
                <input
                  ref={passwordRef}
                  type='password'
                  className='email_input'
                  placeholder='*********'
                  disabled={isViewMode}
                />
              </CCol>
            </CFormGroup>

            {!isViewMode && (
              <>
                <CButton
                  type='submit'
                  size='sm'
                  className='mr-5'
                  color='primary'
                  onClick={handleSave}>
                  Save
                </CButton>

                <CButton
                  type='submit'
                  size='sm'
                  className='mr-5'
                  color='primary'
                  onClick={handleCancel}>
                  Cancel
                </CButton>
              </>
            )}
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  );
};

export default Profile;
