import React, { lazy, useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CDataTable
} from '@coreui/react';
import Icon from '@mdi/react';
import CIcon from '@coreui/icons-react';
import { mdiAccountPlus } from '@mdi/js';
import { useSelector, useDispatch } from 'react-redux';
import CreateAdmin from './CreateAdmin';
import { decrypt } from '../../../share/decrypt';
import ToDateForView from '../../../share/ConvertDateForView';
import axios from 'axios';
const fields = [
  { key: 'email', label: 'Email', _style: { width: '30%' } },
  { key: 'createdAt', label: 'Ngày tạo', _style: { width: '30%' } },
  { key: 'action', label: 'ACTION', _style: { width: '10%' } }
];
const Admins = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const { loginState } = useSelector(state => state.authentication);
  const [admins, setAdmin] = useState([]);
  const rule = decrypt(loginState.rule);
  const setRule = 3;

  const createSuccess = () => {
    setSuccess(!success);
  };

  const handleDelete = item => {
    (async () => {
      const response = await axios.post(
        `http://localhost:9999/api/account/deleteAdmin/${item._id}`
      );
      console.log(response)
      setSuccess(!success);
    })();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:9999/api/account/${setRule}`
      );
      setAdmin(response.data);
      setSuccess(false);
      setLoading(false);
    };

    fetchData();
  }, [success]);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <CCard>
        <CCardHeader className='users-title'>
          QUẢN LÝ TÀI KHOẢN ADMIN
          {rule !== '2' ? (
            <></>
          ) : (
            <div className='card-header-actions'>
              <CButton
                onClick={toggleModal}
                block
                variant='outline'
                color='primary'
                size='sm'
                className='users-title-btn-add'>
                <Icon
                  path={mdiAccountPlus}
                  size={1}
                  title='Create Admin'
                  className='mr-1'
                />
                Thêm admin
              </CButton>
            </div>
          )}
        </CCardHeader>
        <CCardBody className='users-content'>
          <CDataTable
            items={admins}
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
                  {rule !== '2' ? (
                    <></>
                  ) : (
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
                          style={{ color: 'red' }}
                          name='cil-trash'
                          alt='Delete'
                        />
                      </span>
                    </div>
                  )}
                </td>
              )
            }}
          />
        </CCardBody>
        <CreateAdmin
          modal={modal}
          toggleModal={toggleModal}
          createSuccess={createSuccess}
        />
      </CCard>
    </>
  );
};

export default Admins;
