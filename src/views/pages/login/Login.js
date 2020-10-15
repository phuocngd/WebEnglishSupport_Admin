import React, { useRef } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useStorageState } from 'react-storage-hooks'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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
import { login } from '../../../Store/slice/authenticationSlice'
import CryptoJS from 'crypto-js'
import { axiosGet } from '../../../axios/axios'

const queryAccount = async account => {
  await axiosGet(account)
}

const Login = () => {
  const dispatch = useDispatch()
  const isloggedIn = useSelector(state => state.authentication).isLogin
  const usernameRef = useRef(null)
  const passRef = useRef(null)
  const handelLogin = async e => {
    e.preventDefault()
    dispatch(login(true))
    const Userkey = CryptoJS.MD5('loginUserState')
    const Passkey = CryptoJS.MD5('loginPassState')

    const usernameValue = usernameRef.current.value
    const passsValue = passRef.current.value

    console.log(usernameValue)
    console.log(passsValue)
    const username = CryptoJS.AES.encrypt(
      'cloneuser15',
      'SecretPassphrase'
    ).toString()
    const pass = CryptoJS.AES.encrypt(
      'abcd112233',
      'SecretPassphrase'
    ).toString()
    localStorage.setItem(Userkey, username)
    localStorage.setItem(Passkey, pass)
    await queryAccount()
  }
  if (isloggedIn) return <Redirect to="/" />
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        ref={usernameRef}
                        placeholder="Username"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        ref={passRef}
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          onClick={e => handelLogin(e)}
                          color="primary"
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: '44%' }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
