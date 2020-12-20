import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from 'email-validator';
import useEncrypt from '../../hook/useEncrypt';
import { axiosPost } from '../../../axios/axios';
// sua lai profile nam trong compone
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
import Axios from 'axios';
import { getValueRef } from '../../../share/func';
const GeneralEdit = () => {
  return (
    <>
      <OneItemCanEdit
        label='Họ và tên'
        placeholder='name'
        type='text'
        apiPostURL={'http://localhost:9999/api/profile/name'}
        apiGetURL={'http://localhost:9999/api/profile'}
      />
      <OneItemCanEdit label='SĐT' placeholder='0123456789' type='text' />
    </>
  );
};
const Password = () => {
  return (
    <OneItemCanEdit label='Mật khẩu' placeholder='*******' type='password' />
  );
};

const OneItemCanEdit = props => {
  const email = useSelector(state => state.authentication.loginState.email);
  const {
    label,
    placeholder,
    type,
    apiPostURL,
    apiGetURL,
    needEncrypt = false
  } = props;
  const dispatch = useDispatch();
  const [isViewMode, setIsViewMode] = useState(true);
  const [mahoa] = useEncrypt();

  const inputRef = useRef();

  const handleSave = async () => {
    const model = {
      email: email,
      value: needEncrypt ? mahoa(getValueRef(inputRef)) : getValueRef(inputRef)
    };
    const res = await Axios.post(apiPostURL, model);
    setIsViewMode(true);
  };
  //phd chua get dc
  /*   useEffect(() => {
    (async () => {
      // You can await here
      const response = await Axios.get(apiGetURL, {
        params: {
          email
        }
      });
      console.log(response)
    })();
  }, []) */

  const renderBtn = isShow => {
    if (isShow)
      return (
        <>
          <CButton
            type='submit'
            size='l'
            className='item-btn-success'
            color='primary'
            variant='outline'
            onClick={handleSave}>
            Lưu
          </CButton>
          <CButton
            type='submit'
            size='l'
            variant='outline'
            className='item-btn-cancel'
            color='dark'
            onClick={() => setIsViewMode(true)}>
            Hủy
          </CButton>
        </>
      );
    return null;
  };
  return (
    <CRow className='item'>
      <CCol xs='12' md='2'>
        <CLabel className='item-label'>{label}</CLabel>
      </CCol>
      <CCol xs='12' md='10'>
        <input
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          disabled={isViewMode}
        />
        <span className='item-control'>
          {renderBtn(!isViewMode)}
          {isViewMode && (
            <span
              className='item-btnEdit'
              size='l'
              color='primary'
              onClick={() => setIsViewMode(false)}
              variant='outline'>
              Chỉnh sửa
            </span>
          )}
        </span>
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
        <CCol sm='12' md='4' className='profile-left'>
          <div className='profile-nav-header'>Cài đặt</div>
          <CListGroup className='profile-nav-list'>
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
        <CCol sm='12' md='8' className='profile-right'>
          {listTabProfile.map(item => {
            return (
              activeTab === item.id && (
                <div key={item.id}>{item.childComponent}</div>
              )
            );
          })}
        </CCol>
      </CRow>
    </div>
  );
};

const Profile2 = () => {
  return <ConfigList />;
};
export default Profile2;
