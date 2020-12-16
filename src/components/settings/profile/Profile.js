import React, { useRef, useState } from 'react';
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
  CLink,
  CListGroup,
  CListGroupItem,
  CRow
} from '@coreui/react';
import { mdiAccountEditOutline } from '@mdi/js';
import Icon from '@mdi/react';
import CIcon from '@coreui/icons-react';
import { Link } from 'react-router-dom';

const GeneralEdit = () => {
  return <OneItemCanEdit label='Họ và tên' placeholder='anh yeu em' />;
};
const Password = () => {
  return <OneItemCanEdit label='Mật khẩu' placeholder='*******' />;
};

const OneItemCanEdit = props => {
  const { label, placeholder, url } = props;
  const dispatch = useDispatch();
  const [isViewMode, setIsViewMode] = useState(true);
  const [mahoa] = useEncrypt();

  const inputRef = useRef();

  const handleSave = async () => {
    // handle logic send update tung cai o đây
    setIsViewMode(true);
  };

  const renderBtn = isShow => {
    if (isShow)
      return (
        <>
          <CButton
            type='submit'
            size='l'
            className='profile-content-btn'
            color='primary'
            variant='outline'
            onClick={handleSave}>
            Lưu
          </CButton>
          <CButton
            type='submit'
            size='l'
            variant='outline'
            className='profile-content-btn'
            color='dark'
            onClick={() => setIsViewMode(true)}>
            Hủy
          </CButton>
        </>
      );
    return null;
  };
  return (
    <CRow>
      <CCol xs='12' md='2'>
        <CLabel htmlFor='text-fullname'>{label}</CLabel>
      </CCol>
      <CCol xs='12' md='7'>
        <input
          ref={inputRef}
          type='text'
          placeholder={placeholder}
          disabled={isViewMode}
        />
        {renderBtn(!isViewMode)}
      </CCol>
      <CCol xs='12' md='3'>
        {isViewMode && (
          <span
            className='btnEdit'
            size='l'
            color='primary'
            onClick={() => setIsViewMode(false)}
            variant='outline'>
            Chỉnh sửa
          </span>
        )}
      </CCol>
    </CRow>
  );
};

const ConfigList = () => {
  const listTabProfile = [
    {
      id: 0,
      label: 'Chung',
      childComponent: <GeneralEdit />
    },
    {
      id: 1,
      label: 'Bảo mật và đăng nhập',
      childComponent: <Password />
    }
  ];
  const [activeTab, setActiveTab] = React.useState(listTabProfile[0].id);

  const handleActiveTab = id => {
    setActiveTab(id);
  };
  return (
    <div>
      <CRow>
        <CCol sm='12' xl='4'>
          <div>Cài đặt</div>
          <CListGroup>
            {listTabProfile.map(item => {
              return (
                <CListGroupItem
                  key={item.id}
                  onClick={() => handleActiveTab(item.id)}
                  className={`${activeTab === item.id ? 'active-tab' : ''}`}>
                  {item.label}
                </CListGroupItem>
              );
            })}
          </CListGroup>
        </CCol>
        <CCol sm='12' xl='8'>
          <CListGroup>
            {listTabProfile.map(item => {
              return (
                activeTab === item.id && (
                  <div key={item.id}>{item.childComponent}</div>
                )
              );
            })}
          </CListGroup>
        </CCol>
      </CRow>
    </div>
  );
};

const Profile2 = () => {
  return <ConfigList />;
};
export default Profile2;
