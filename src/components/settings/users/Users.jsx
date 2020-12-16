import React, { lazy, useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CLink
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import Icon from '@mdi/react';
import { mdiAccountPlus } from '@mdi/js';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Users = () => {

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className='users-title'>
              QUẢN LÝ TÀI KHOẢN ADMIN
              <div className='card-header-actions'>
                <CLink to='/QuanLy/TaiKhoanAdmin/ThemAdmin'>
                  <CButton
                    block
                    variant='outline'
                    color='primary'
                    size='sm'
                    className='users-title-btn-add'>
                    <Icon
                      path={mdiAccountPlus}
                      size={1}
                      title='Create Admin'
                      className='mr-1'
                    />
                    Thêm admin
                  </CButton>
                </CLink>
              </div>
            </CCardHeader>
            <CCardBody className='users-content'>
              <table className='table table-hover table-outline mb-0 d-none d-sm-table'>
                <thead className='thead-light'>
                  <tr>
                    <th className='text-center '>Số thứ tự</th>
                    <th className='text-center'>Họ tên</th>
                    <th className='text-center'>Email</th>
                    <th className='text-center'>Ngày tạo tài khoản</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  <tr>
                    <td>
                      <div>1</div>
                    </td>
                    <td>
                      <div>Trúc</div>
                    </td>
                    <td className='text-center'>
                      <div>truc@gmail.com</div>
                    </td>
                    <td>
                      <div className='clearfix'>2020-10-31</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>1</div>
                    </td>
                    <td>
                      <div>Trúc</div>
                    </td>
                    <td className='text-center'>
                      <div>truc@gmail.com</div>
                    </td>
                    <td>
                      <div className='clearfix'>2020-10-31</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>1</div>
                    </td>
                    <td>
                      <div>Trúc</div>
                    </td>
                    <td className='text-center'>
                      <div>truc@gmail.com</div>
                    </td>
                    <td>
                      <div className='clearfix'>2020-10-31</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>1</div>
                    </td>
                    <td>
                      <div>Trúc</div>
                    </td>
                    <td className='text-center'>
                      <div>truc@gmail.com</div>
                    </td>
                    <td>
                      <div className='clearfix'>2020-10-31</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>1</div>
                    </td>
                    <td>
                      <div>Trúc</div>
                    </td>
                    <td className='text-center'>
                      <div>truc@gmail.com</div>
                    </td>
                    <td>
                      <div className='clearfix'>2020-10-31</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>1</div>
                    </td>
                    <td>
                      <div>Trúc</div>
                    </td>
                    <td className='text-center'>
                      <div>truc@gmail.com</div>
                    </td>
                    <td>
                      <div className='clearfix'>2020-10-31</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Users;