import React from 'react'
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
    CSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const addExam = () => {
    // const [collapsed, setCollapsed] = React.useState(true)
    // const [showElements, setShowElements] = React.useState(true)

    return (
        <>
            <CCard>
                <CCardHeader>
                   THÊM ĐỀ THI
                </CCardHeader>
                <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="text-input">Tên đề</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput id="text-input" name="text-input" placeholder="Text" />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel>Loại đề</CLabel>
                            </CCol>
                            <CCol md="9">
                                <CFormGroup variant="custom-radio" inline>
                                    <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                                    <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Listening</CLabel>
                                </CFormGroup>
                                <CFormGroup variant="custom-radio" inline>
                                    <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                                    <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Reading</CLabel>
                                </CFormGroup>
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CLabel col md="3" htmlFor="file-input">File đề thi</CLabel>
                            <CCol xs="12" md="9">
                                <CInputFile id="file-input" name="file-input" />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CLabel col md="3" htmlFor="file-input">File nghe(nếu có)</CLabel>
                            <CCol xs="12" md="9">
                                <CInputFile id="file-input" name="file-input" />
                            </CCol>
                        </CFormGroup>
                    </CForm>
                </CCardBody>
                <CCardFooter>
                    <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Thêm mới</CButton>
                    <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Hủy</CButton>
                </CCardFooter>
            </CCard>
        </>
    )
}

export default addExam;
