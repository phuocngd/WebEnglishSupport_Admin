import React, { useEffect, useRef, useState } from 'react';
import {
  CButton,
  CCol,
  CLabel,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CRow,
  CContainer
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { postExamRequest, addExam } from '../../../Store/slice/examSlide';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { axiosPost } from '../../../axios/axios';
import Questions from './Questions';
// import Dropzone from 'react-dropzone';

const CreateExam = props => {
  const dispatch = useDispatch();
  let titleRef = useRef();
  let descriptionRef = useRef();
  let LCRef = useRef();
  let AudioRef = useRef();
  let RCRef = useRef();
  let exam = { titleRef, descriptionRef, LCRef, AudioRef, RCRef };
  const [modal, setModal] = useState(false);
  const onSubmit = async () => {
    try {
      const filterModel = {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        url: 'http://localhost:9999/api/fullexam/'
      };
      const res = await axiosPost(filterModel);
      if (res) {
        props.createSuccess();
        props.toggleModal();
        toggleModal();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    // <>
    //   <CCard>
    //     <CCardHeader className='exams-title'>THÊM ĐỀ THI</CCardHeader>
    //     <CCardBody className='exams-content'>
    //       <CForm
    //         onSubmit={e => createExam(e)}
    //         encType='multipart/form-data'
    //         className='form-horizontal'>
    //         <CFormGroup row className='exams-content-group'>
    //           <CCol md='3'>
    //             <CLabel htmlFor='text-tieude'>Tên đề thi</CLabel>
    //           </CCol>
    //           <CCol xs='12' md='6'>
    //             <CInput
    //               id='text-tieude'
    //               name='text-tieude'
    //               ref={titleRef}
    //               value={title}
    //               onChange={e => setStateTitle(e.target.value)}
    //               placeholder='Tên đề thi'
    //               required
    //             />
    //           </CCol>
    //         </CFormGroup>
    //         <CFormGroup row className='exams-content-group'>
    //           <CCol md='3'>
    //             <CLabel htmlFor='text-tieude'>Mô tả</CLabel>
    //           </CCol>
    //           <CCol xs='12' md='6'>
    //             <CInput
    //               id='text-mota'
    //               name='text-mota'
    //               ref={descriptionRef}
    //               value={description}
    //               onChange={e => setStateDescription(e.target.value)}
    //               placeholder='Mô tả'
    //             />
    //           </CCol>
    //         </CFormGroup>

    //         {/* <CFormGroup row>
    //            <CCol md='3'>
    //              <CLabel>Loại đề</CLabel>
    //            </CCol>
    //            <CCol md='9'>
    //              <CFormGroup variant='custom-radio' inline>
    //                <CInputRadio
    //                  custom
    //                  id='inline-radio1'
    //                  name='inline-radios'
    //                  value='option1'
    //                />
    //                <CLabel variant='custom-checkbox' htmlFor='inline-radio1'>
    //                  Listening
    //                </CLabel>
    //              </CFormGroup>
    //              <CFormGroup variant='custom-radio' inline>
    //                <CInputRadio
    //                  custom
    //                  id='inline-radio2'
    //                  name='inline-radios'
    //                  value='option2'
    //                />
    //                <CLabel variant='custom-checkbox' htmlFor='inline-radio2'>
    //                  Reading
    //                </CLabel>
    //              </CFormGroup>
    //            </CCol>
    //          </CFormGroup> */}
    //         {/* <CFormGroup row className='exams-content-group'>
    //           <CCol md='3'>
    //             <CLabel htmlFor='filepdf-dethinghe'>Đề thi nghe</CLabel>
    //           </CCol>
    //           <CCol xs='12' md='6'>
    //             <CInputFile
    //               id='filepdf-dethinghe'
    //               name='filepdf-dethinghe'
    //               ref={LCRef}
    //               value={LC}
    //               onChange={e => setStateLC(e.target.value)}
    //               required
    //             />
    //           </CCol>
    //         </CFormGroup> */}
    //         {/* <CFormGroup row className='exams-content-group'>
    //            <CCol md='3'>
    //              <CLabel htmlFor='fileaudio-dethinghe'>File nghe</CLabel>
    //            </CCol>
    //            <CCol xs='12' md='6'>
    //              <CInputFile
    //                id='fileaudio-nghe'
    //                name='fileaudio-dethinghe'
    //                 ref={AudioRef}
    //                value={Audio}
    //                onChange={e => setStateAudio(e.target.value)}
    //                required
    //              />
    //            </CCol>
    //          </CFormGroup>
    //          <CFormGroup row className='exams-content-group'>
    //            <CCol md='3'>
    //              <CLabel htmlFor='filepdf-dethidoc'>Đề thi đọc</CLabel>
    //            </CCol>
    //            <CCol xs='12' md='6'>
    //              <CInputFile
    //                id='filepdf-dethidoc'
    //                name='filepdf-dethidoc'
    //                 ref={RCRef}
    //                value={RC}
    //                onChange={e => setStateRC(e.target.value)}
    //                required
    //              />
    //            </CCol>
    //          </CFormGroup> */}
    //         <CButton
    //           type='submit'
    //           size='sm'
    //           className='mr-5'
    //           color='primary'
    //           onClick={handleCreateExam}>
    //           <CIcon name='cil-scrubber' /> Thêm mới
    //         </CButton>
    //         <CButton type='reset' size='sm' color='danger' onClick={handleExit}>
    //           <CIcon name='cil-ban' /> Quay lại
    //         </CButton>
    //       </CForm>
    //     </CCardBody>
    //   </CCard>
    // </>
    <>
      {/* Modal Them fullexam */}
      <CModal show={props.modal} onClose={props.toggleModal}>
        <CModalHeader closeButton>
          {' '}
          <h3>Thêm mới bộ đề thi</h3>
        </CModalHeader>
        <form onSubmit={onSubmit}>
          <CModalBody>
            <CContainer>
              <CRow>
                <CCol lg='12'>
                  <CRow>
                    <CCol md='5' className='my-3'>
                      <CLabel htmlFor='text-title'>Tên đề thi</CLabel>
                    </CCol>
                    <CCol xs='12' md='7'>
                      <input
                        ref={titleRef}
                        type='text'
                        placeholder='Tên đề thi'
                        autoComplete='title'
                        required
                      />
                    </CCol>
                    <CCol md='5'>
                      <CLabel htmlFor='text-description'>Mô tả</CLabel>
                    </CCol>
                    <CCol xs='12' md='7'>
                      <input
                        ref={descriptionRef}
                        type='description'
                        className='description_input'
                        placeholder='Mô tả'
                        autoComplete='description'
                        required
                      />
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CContainer>
          </CModalBody>
          <CModalFooter>
            {/* <CButton color='primary' type='submit'>
              Thêm mới
            </CButton> */}
            <CButton color='primary' type='submit' id='next'>
              Next
            </CButton>
            <CButton color='secondary' onClick={props.toggleModal}>
              Bỏ qua
            </CButton>
          </CModalFooter>
        </form>
      </CModal>

      {/* Modal them tung exam */}
      <CModal show={modal} onClose={toggleModal}>
        <CModalHeader closeButton>
          <h3>Thêm mới đề thi nghe</h3>
        </CModalHeader>

        <form>
          <CModalBody>
            <CContainer>
              <CRow>
                <CCol lg='12'>
                  <CRow>
                    <CCol md='5' className='my-3'>
                      <CLabel htmlFor='text-title'>Tên đề thi</CLabel>
                    </CCol>
                    <CCol xs='12' md='7'>
                      <input
                        // ref={titleRef}
                        type='text'
                        placeholder='Tên đề thi'
                        autoComplete='title'
                        required
                      />
                    </CCol>
                    <CCol md='5'>
                      <CLabel htmlFor='text-description'>Mô tả</CLabel>
                    </CCol>
                    <CCol xs='12' md='7'>
                      <input
                        // ref={descriptionRef}
                        type='description'
                        className='description_input'
                        placeholder='Mô tả'
                        autoComplete='description'
                        required
                      />
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CContainer>
            {/* <QuestionWarrper />
            <Questions fromIndex='1' toIndex='100' /> */}
          </CModalBody>
          <CModalFooter>
            <CButton color='primary' type='submit'>
              Thêm mới
            </CButton>{' '}
            <CButton color='secondary' onClick={toggleModal}>
              Bỏ qua
            </CButton>
          </CModalFooter>
        </form>
      </CModal>
    </>
  );
};
const QuestionWarrper=()=>{
  const doExam =useSelector(state =>state.doExam);
  
}
export default CreateExam;
