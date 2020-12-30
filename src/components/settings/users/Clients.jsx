import React, { lazy, useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CDataTable } from '@coreui/react';
import { useSelector, useDispatch } from 'react-redux';
import ToDateForView from '../../../share/ConvertDateForView';
import axios from 'axios';

const fields = [
  { key: 'email', label: 'Email', _style: { width: '30%' } },
  { key: 'createdAt', label: 'Ngày tạo', _style: { width: '30%' } }
];

const Clients = () => {
  const dispatch = useDispatch();
  const [islogin, setIsLogin] = useState(isLogin);
  const { isLogin } = useSelector(state => state.authentication);
  const [clients, setClient]= useState([])
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const setRule = 4;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:9999/api/account/${setRule}`
      );
      setClient(response.data);
      setSuccess(false);
      setLoading(false);
    };

    fetchData();
  }, [success]);
  return (
    <>
      <CCard>
        <CCardHeader className='users-title'>
          DANH SÁCH TÀI KHOẢN NGƯỜI DÙNG
        </CCardHeader>
        <CCardBody className='users-content'>
          <CDataTable
            items={clients}
            fields={fields}
            striped
            responsive
            hover
            sorter
            tableFilter
            scopedSlots={{
              index: item => <td>{item._id}</td>,
              name: item => <td>{item.email}</td>,
              createdAt: item => <td>{ToDateForView(item.createdAt)}</td>
            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Clients;
