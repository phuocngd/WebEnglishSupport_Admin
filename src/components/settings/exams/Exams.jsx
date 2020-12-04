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
import Icon from '@mdi/react';
import { mdiAccountPlus } from '@mdi/js';
import { mdiPencilOutline } from '@mdi/js';
import { mdiDelete } from '@mdi/js';

const Exams = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className='users-title'>
              QUẢN LÝ ĐỀ THI
              <div className='card-header-actions'>
                <CLink to='/QuanLy/DeThi/ThemDeThi'>
                  <CButton
                    block
                    variant='outline'
                    color='primary'
                    size='sm'
                    className='users-title-btn-add'>
                    <Icon
                      path={mdiAccountPlus}
                      size={1}
                      title='Create Exam'
                      className='mr-1'
                    />
                    Thêm đề thi
                  </CButton>
                </CLink>
              </div>
            </CCardHeader>
            <CCardBody className='users-content'>
              <table className='table table-hover table-outline mb-0 d-none d-sm-table'>
                <thead className='thead-light'>
                  <tr>
                    <th className='text-center '>Số thứ tự</th>
                    <th className='text-center'>Tên đề thi</th>
                    <th className='text-center'>Mô tả</th>
                    <th className='text-center'>Ngày tạo</th>
                    <th className='text-center'>Chỉnh sửa</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  <tr>
                    <td>
                      <div>1</div>
                    </td>
                    <td>
                      <div>Đề 1</div>
                    </td>
                    <td className='text-center'>
                      <div>Chưa cập nhật</div>
                    </td>
                    <td>
                      <div className='clearfix'>2020-10-31</div>
                    </td>
                    <td>
                        <Icon
                          path={mdiPencilOutline}
                          size={1}
                          title='Edit Exam'
                          className='mr-1'
                        />
                      <Icon
                        path={mdiDelete}
                        size={1}
                        title='Delete Exam'
                        className='mr-1'
                      />
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

export default Exams;
