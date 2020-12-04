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
import { mdiAccountEditOutline } from '@mdi/js';
import Icon from '@mdi/react';

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
        <CCardHeader className='profile-title'>
          Thông tin cá nhân
          {isViewMode && (
            <CButton
              className='btnEdit'
              size='sm'
              color='danger'
              onClick={handleMode}
              variant='outline'>
              <Icon
                path={mdiAccountEditOutline}
                size={1}
                title='Edit Profile'
              />
              Cập nhật
            </CButton>
          )}
        </CCardHeader>

        <CCardBody className='profile-content'>
          <CForm className='form-horizontal'>
            <CFormGroup row>
              <CCol md='3'>
                <CLabel htmlFor='text-fullname'>Họ tên</CLabel>
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
                <CLabel htmlFor='text-password'>Mật khẩu</CLabel>
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
                  className='profile-content-btn'
                  color='primary'
                  variant='outline'
                  onClick={handleSave}>
                  Cập nhật
                </CButton>

                <CButton
                  type='submit'
                  size='sm'
                  variant='outline'
                  className='profile-content-btn'
                  color='danger'
                  onClick={handleCancel}>
                  Hủy cập nhật
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
