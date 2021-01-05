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
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';
import Icon from '@mdi/react';
import { mdiAccountPlus } from '@mdi/js';
import { useDispatch, useSelector } from 'react-redux';
import { getExamsRequest } from '../../../Store/slice/examSlide';
import ToDateForView from '../../../share/ConvertDateForView';
import axios from 'axios';
import CreateFullExam from './CreateFullExam';
import CreateExam from './CreateExam';
const fields = [
  { key: 'title', label: 'Tên đề thi', _style: { width: '30%' } },
  { key: 'description', label: 'Mô tả', _style: { width: '30%' } },
  { key: 'createdAt', label: 'Ngày tạo', _style: { width: '30%' } },
  { key: 'action', label: 'ACTION', _style: { width: '10%' } }
];

const Exams = () => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [fullExam, setFullExam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:9999/api/fullexam/');
      setFullExam(response.data);
    };
    fetchData();
  }, [success]);

  const handleDelete = item => {
    (async () => {
      const response = await axios.post(
        `http://localhost:9999/api/fullexam/delete/${item._id}`
      );
      console.log(response);
      setSuccess(!success);
    })();
  };
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className='exams-title'>
              QUẢN LÝ ĐỀ THI
              <div className='card-header-actions'>
                <CLink
                  to='/DeThi/ThemDeThi'
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
                </CLink>
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
                          <CIcon
                            content={freeSet.cilTrash}
                            style={{ color: 'red' }}
                            name='cil-trash'
                            alt='Delete'
                          />
                        </span>
                      </div>
                    </td>
                  )
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Exams;
