// config slidebar
//_tag type: 'CSidebarNavTitle' , 'CSidebarNavItem', 'CSidebarNavDropdown',
export default [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lí',
    icon: 'cil-people',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Tài khoản admin',
        to: '/TaiKhoanAdmin',
        badge: {
          color: 'info'
        }
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tài khoản người dùng',
        to: '/TaiKhoanNguoiDung',
        badge: {
          color: 'info'
        }
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Đề thi',
        to: '/DeThi',
        badge: {
          color: 'info'
        }
      }
    ]
  }
];
