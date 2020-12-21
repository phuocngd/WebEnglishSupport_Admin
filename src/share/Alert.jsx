import Swal from 'sweetalert2';
///200,201:  be ok, đã sử lí
//204: be thiếu thông tin
//205: be thiếu thong tin, cần fe cung cấp thêm
//404: not found
//405: method not allowed
// 500 server eror;

const StatusMiddleWare = (status, data) => {
  const { infoMessage } = data;
  if (!infoMessage) {
    return true;
  }

  switch (status) {
    case 201:
      return true;
    case 202:
      Swal.fire('', infoMessage, 'error');
      return false;
    case 203:
      Swal.fire('', infoMessage, 'error');
      return false;
    case 404:
      Swal.fire('', infoMessage, 'error');
      return false;
    default:
      return false;
  }
};
export { StatusMiddleWare };
