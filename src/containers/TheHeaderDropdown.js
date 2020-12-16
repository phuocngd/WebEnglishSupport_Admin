import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
  CLink
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { logOut } from '../Store/slice/authenticationSlice';

const TheHeaderDropdown = () => {
  const dispatch = useDispatch();

  const handelLogout = () => {
    dispatch(logOut());
  };
  return (
    <CDropdown inNav className='c-header-nav-items mx-2' direction='down'>
      <CDropdownToggle className='c-header-nav-link' caret={false}>
        <div className='c-avatar'>
          <CImg
            src={'avatars/6.jpg'}
            className='c-avatar-img'
            alt='admin@bootstrapmaster.com'
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className='pt-0' placement='bottom-end'>
        <CDropdownItem className='header-dropdown-profile'>
          <CLink to='/ThongTinCaNhan'>
            <CIcon name='cil-user' className='mfe-2' />
            Profile
          </CLink>
        </CDropdownItem>
        <CDropdownItem onClick={handelLogout}>
          <CIcon name='cil-settings' className='mfe-2' />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
