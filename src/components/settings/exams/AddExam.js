import React from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CLabel,
  CSelect
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

const addExam = () => {
  // const [collapsed, setCollapsed] = React.useState(true)
  // const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CCard>
        <CCardHeader>THÊM ĐỀ THI</CCardHeader>
        <CCardBody>
          <CForm
            action=''
            method='post'
            encType='multipart/form-data'
            className='form-horizontal'>
            <CFormGroup row>
              <CCol md='3'>
                <CLabel htmlFor='text-tieude'>Tên đề</CLabel>
              </CCol>
              <CCol xs='12' md='9'>
                <CInput
                  id='text-tieude'
                  name='text-tieude'
                  placeholder='Text'
                  required
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md='3'>
                <CLabel>Loại đề</CLabel>
              </CCol>
              <CCol md='9'>
                <CFormGroup variant='custom-radio' inline>
                  <CInputRadio
                    custom
                    id='inline-radio1'
                    name='inline-radios'
                    value='option1'
                  />
                  <CLabel variant='custom-checkbox' htmlFor='inline-radio1'>
                    Listening
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant='custom-radio' inline>
                  <CInputRadio
                    custom
                    id='inline-radio2'
                    name='inline-radios'
                    value='option2'
                  />
                  <CLabel variant='custom-checkbox' htmlFor='inline-radio2'>
                    Reading
                  </CLabel>
                </CFormGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel col md='3' htmlFor='file-dethi'>
                File đề thi
              </CLabel>
              <CCol xs='12' md='9'>
                <CInputFile id='file-dethi' name='file-dethi' />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel col md='3' htmlFor='file-nghe'>
                File nghe(nếu có)
              </CLabel>
              <CCol xs='12' md='9'>
                <CInputFile id='file-nghe' name='file-nghe' />
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type='submit' size='sm' className='mr-5' color='primary'>
            <CIcon name='cil-scrubber' /> Thêm mới
          </CButton>
          <CButton type='reset' size='sm' color='danger'>
            <CIcon name='cil-ban' /> Quay lại
          </CButton>
        </CCardFooter>
      </CCard>
    </>
  );
};

export default addExam;
