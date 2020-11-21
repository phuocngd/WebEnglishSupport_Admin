import React, { lazy } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Accounts = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              QUẢN LÝ TÀI KHOẢN NGƯỜI DÙNG
            <div className="card-header-actions">
                {/* <CButton block variant="outline" color="primary" size="sm"><CLink to="/Quản lý/Đề thi/Thêm đề thi"><span> <CIcon height={25} name="cil-plus" /></span>Thêm đề thi</CLink></CButton> */}
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
                      <div className="clearfix">
                        2020-10-31
                      </div>
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
                      <div className="clearfix">
                        2020-10-31
                      </div>
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
                      <div className="clearfix">
                        2020-10-31
                      </div>
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
                      <div className="clearfix">
                        2020-10-31
                      </div>
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
                      <div className="clearfix">
                        2020-10-31
                      </div>
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
                      <div className="clearfix">
                        2020-10-31
                      </div>
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

export default Accounts
