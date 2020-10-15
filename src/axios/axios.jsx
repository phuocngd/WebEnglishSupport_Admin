import axios from 'axios';

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
  return response;
};

const axiosPost = async props => {
  const { url, ...rest } = props;
  let response;
  try {
    response = await axios.post(url, rest);
  } catch (error) {
    console.error(error);
  }
  return response;
};

export { axiosGet, axiosPost };
