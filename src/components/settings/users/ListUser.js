import React, { lazy, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Users = () => {
  const [users, setUsers] = useState();
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              QUẢN LÝ TÀI KHOẢN ADMIN
              <div className="card-header-actions">
                <CLink to="/Quản lý/Tài khoản admin/Thêm admin">
                  <CButton block variant="outline" color="primary" size="sm">
                    Thêm đề thi
                  </CButton>
                </CLink>
              </div>
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center ">Số thứ tự</th>
                    <th className="text-center">Họ tên</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Ngày tạo tài khoản</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>
                      <div>1</div>
                    </td>
                    <td>
                      <div>Trúc</div>
                    </td>
                    <td className="text-center">
                      <div>truc@gmail.com</div>
                    </td>
                    <td>
                      <div className="clearfix">2020-10-31</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>1</div>
                    </td>
                    <td>
                      <div>Trúc</div>
                    </td>
                    <td className="text-center">
                      <div>truc@gmail.com</div>
                    </td>
                    <td>
                      <div className="clearfix">2020-10-31</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>1</div>
                    </td>
                    <td>
                      <div>Trúc</div>
                    </td>
                    <td className="text-center">
                      <div>truc@gmail.com</div>
                    </td>
                    <td>
                      <div className="clearfix">2020-10-31</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>1</div>
                    </td>
                    <td>
                      <div>Trúc</div>
                    </td>
                    <td className="text-center">
                      <div>truc@gmail.com</div>
                    </td>
                    <td>
                      <div className="clearfix">2020-10-31</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>1</div>
                    </td>
                    <td>
                      <div>Trúc</div>
                    </td>
                    <td className="text-center">
                      <div>truc@gmail.com</div>
                    </td>
                    <td>
                      <div className="clearfix">2020-10-31</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>1</div>
                    </td>
                    <td>
                      <div>Trúc</div>
                    </td>
                    <td className="text-center">
                      <div>truc@gmail.com</div>
                    </td>
                    <td>
                      <div className="clearfix">2020-10-31</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Users
