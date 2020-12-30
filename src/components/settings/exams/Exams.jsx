import React, { lazy, useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
  CButton,
  CDataTable
} from '@coreui/react';
import Icon from '@mdi/react';
import { mdiAccountPlus } from '@mdi/js';
import { useDispatch, useSelector } from 'react-redux';
import { getExamsRequest } from '../../../Store/slice/examSlide';
import ToDateForView from '../../../share/ConvertDateForView';
import axios from 'axios';
import CreateExam from './CreateExam'
const fields = [
  { key: 'title', label: 'Tên đề thi', _style: { width: '30%' } },
  { key: 'description', label: 'Mô tả', _style: { width: '30%' } },
  { key: 'createdAt', label: 'Ngày tạo', _style: { width: '30%' } }
];

const Exams = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fullExam, setFullExam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:9999/api/fullexam/');
      setFullExam(response.data);
      setSuccess(false);
      setLoading(false);
    };
    fetchData();
  }, [success]);

  const createSuccess = () => {
    setSuccess(!success);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleDelete = item => {};

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className='exams-title'>
              QUẢN LÝ ĐỀ THI
              <div className='card-header-actions'>
                  <CButton
                    onClick={toggleModal}
                    block
                    variant='outline'
                    color='primary'
                    size='sm'
                    className='exams-title-btn-add'>
                    <Icon
                      path={mdiAccountPlus}
                      size={1}
                      title='Create Exam'
                      className='mr-1'
                    />
                    Thêm đề thi
                  </CButton>
              </div>
            </CCardHeader>
            <CCardBody className='exams-content'>
              <CDataTable
                items={fullExam}
                fields={fields}
                striped
                responsive
                hover
                sorter
                tableFilter
                scopedSlots={{
                  index: item => <td>{item._id}</td>,
                  name: item => <td>{item.email}</td>,
                  createdAt: item => <td>{ToDateForView(item.createdAt)}</td>,
                  action: item => (
                    <td style={{ display: 'flex', justifyContent: 'start' }}>
                      <div
                        style={{
                          display: 'flex',
                          width: '80%',
                          justifyContent: 'space-between'
                        }}>
                        <span
                          className='c-subheader-nav-link'
                          onClick={() => handleDelete(item)}>
                          {/* <Icon
                            style={{ color: 'red' }}
                            name='cil-trash'
                            alt='Delete'
                          /> */}
                        </span>
                      </div>
                    </td>
                  )
                }}
              />
              <CreateExam
                modal={modal}
                toggleModal={toggleModal}
                createSuccess={createSuccess}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Exams;
