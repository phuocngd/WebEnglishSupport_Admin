import React,{useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CLink
} from '@coreui/react'

const User = () => {
const [users, setUsers]=useState({
    fullname,
    email,
    createdDate
});

    return (
      <tr>
        <td>{users.fullname}</td>
        <td>{users.email}</td>
        <td>{users.createdDate}</td>
        <td></td>
      </tr>
    )
}
export default User