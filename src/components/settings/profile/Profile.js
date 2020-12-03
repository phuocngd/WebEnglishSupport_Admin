import React, { useRef } from "react";
import { useDispatch } from 'react-redux'
import { validate } from 'email-validator'
import useEncrypt from '../../hook/useEncrypt'
import { axiosPost } from '../../../axios/axios'

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

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
const Profile = () => {
    const dispatch=useDispatch();
    
    return (
        <CContainer>
            <CCard>
                <CCardHeader>
                    THÔNG TIN CÁ NHÂN
                </CCardHeader>
                <CCardBody>
                    <CForm className="form-horizontal">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="text-fullname">Fullname</CLabel>
                            </CCol>
                            <CCol xs="12" md="6">
                                <input type="text"
                                    placeholder="Fullname"
                                    autoComplete="fullname" required />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="text-email">Email</CLabel>
                            </CCol>
                            <CCol xs="12" md="6">
                                <input
                                    type="email"
                                    className="email_input"
                                    placeholder="Email"
                                    autoComplete="email"
                                    required
                                />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="text-password">Password</CLabel>
                            </CCol>
                            <CButton type="submit" size="sm" className="mr-5" color="primary"><CIcon name="cil-scrubber" /> Thay đổi mật khẩu</CButton>
                        </CFormGroup>
                        <CLink to="/ThongTinCaNhan/CapNhat">
                        <CButton type="submit" size="sm" className="mr-5" color="primary"><CIcon name="cil-scrubber" />Cập nhật</CButton>
                        </CLink>
                        <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Quay lại</CButton>
                    </CForm>
                </CCardBody>
            </CCard>
        </CContainer>
    )
}

export default Profile;