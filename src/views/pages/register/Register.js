import React, { useRef } from 'react'
import { validate } from 'email-validator'

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useDispatch } from 'react-redux'
import useEncrypt from '../../../components/hook/useEncrypt'
import { signupRequest } from '../../../Store/slice/authenticationSlice'
import { axiosPost } from '../../../axios/axios'

const Register = () => {
  const [mahoa] = useEncrypt()
  const dispatch = useDispatch()
  let usernameRef = useRef()
  let emailRef = useRef()
  let passRef = useRef()

  const handelCreateAccount = async () => {
    if (
      !usernameRef.current.value ||
      !emailRef.current.value ||
      !passRef.current.value
    )
      return null
    if (!validate(emailRef.current.value)) {
      alert('Email không hợp lệ')
      return null
    }
    const filterModel = {
      fullname: mahoa(usernameRef.current.value),
      email: mahoa(emailRef.current.value),
      password: mahoa(passRef.current.value),
      url: 'http://localhost:9999/signup'
    }
    const res = await axiosPost(filterModel)
    if (res) {
      alert('Tạo tài khoản thành công')
    } else {
      alert('Tạo tài khoản không thành công')
    }
    // dispatch(signupRequest(filterModel))
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <input
                      ref={usernameRef}
                      type="text"
                      placeholder="Fullname"
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <input
                      ref={emailRef}
                      type="email"
                      className="email_input"
                      placeholder="Email"
                      autoComplete="email"
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <input
                      ref={passRef}
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      required
                    />
                  </CInputGroup>
                  <CButton color="success" block onClick={handelCreateAccount}>
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block>
                      <span>facebook</span>
                    </CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block>
                      <span>twitter</span>
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
