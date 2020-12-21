import axios from 'axios';
import { StatusMiddleWare } from '../share/Alert';

const axiosGet = async props => {
  const { url, ...rest } = props;
  console.log(props);
  let response;
  try {
    response = await axios.get(url, {
      params: {
        ...rest
      }
    });
  } catch (error) {
    console.error(error);
  }
  return StatusMiddleWare(response.status, response.data) && response;
};

const axiosPost = async props => {
  const { url, ...rest } = props;
  let response;
  try {
    response = await axios.post(url, rest);
  } catch (error) {
    console.error(error);
  }
  return StatusMiddleWare(response.status, response.data) && response;
};

const axiosDelete = async props => {
  const { url, ...rest } = props;
  let response;
  try {
    response = await axios.delete(url, rest);
  } catch (error) {
    console.error(error);
  }
  return StatusMiddleWare(response.status, response.data) && response;
};
export { axiosGet, axiosPost, axiosDelete };
