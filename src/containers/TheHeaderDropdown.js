import React from 'react'
import { useDispatch } from 'react-redux'

import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { logout } from '../Store/slice/authenticationSlice'

const TheHeaderDropdown = () => {
  const dispatch = useDispatch()
  const handelLogout = () => {
    dispatch(logout())
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem>
          <CLink to='/ThongTinCaNhan'>
            <CIcon name="cil-user" className="mfe-2" />
          Profile
          </CLink>

        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
