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
const Users = () => {
  const [users, setUsers] = useState();
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className='users-title'>
              DANH SÁCH TÀI KHOẢN HỌC VIÊN
            </CCardHeader>
            <CCardBody className='users-content'>
              <table className='table table-hover table-outline mb-0 d-none d-sm-table'>
                <thead className='thead-light'>
                  <tr>
                    <th className='text-center '>Số thứ tự</th>
                    <th className='text-center'>Học viên</th>
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
