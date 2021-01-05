import React from 'react';

const Exams = React.lazy(() => import('../components/settings/fullexam/Exams'));
const dashboard = React.lazy(()=> import('../components/dashboard/Dashboard'))
const CreateFullExam = React.lazy(() =>
  import('../components/settings/fullexam/CreateFullExam')
);
const EditFullExam = React.lazy(()=>import('../components/settings/fullexam/EditFullExam'))
const ThongKeGiaiDe = React.lazy(() =>
  import('../components/thongke/ThongKeGiaiDe')
);

const Admin = React.lazy(() => import('../components/settings/users/Admins'));
const Clients = React.lazy(() =>
  import('../components/settings/users/Clients')
);

const profile = React.lazy(() =>
  import('../components/settings/profile/Profile')
);
const routes = [
  { path: '/', exact: true, name: 'Home', component: dashboard },
  { path: '/ThongTinCaNhan', name: 'Thông tin cá nhân', component: profile },
  {
    path: '/TaiKhoanAdmin',
    name: 'Tài khoản Admin',
    component: Admin,
    exact: true
  },
  {
    path: '/TaiKhoanNguoiDung',
    name: 'Tài khoản người dùng',
    component: Clients,
    exact: true
  },
  {
    path: '/TaiKhoanNguoiDung',
    name: 'Tài khoản',
    component: Admin,
    exact: true
  },
  { path: '/DeThi', name: 'Đề thi', component: Exams, exact: true },
  {
    path: '/DeThi/ThemDeThi',
    name: 'Thêm đề thi',
    component: CreateFullExam,
    exact: true
  },
  {
    path: '/DeThi/CapNhatDeThi/:id',
    name: 'Cập nhật đề thi',
    component: EditFullExam,
    exact: true
  },
  {
    path: '/ThongKeGiaiDe',
    name: 'Thống kê giải đề của user',
    component: ThongKeGiaiDe,
    exact: true
  }
];
export default routes;
