import axios from "axios";
 const AxiosInstance = axios.create({
    baseURL: 'https://tc-eng-portal-aws.digitalconnect.apps.ge.com/api',
    timeout: 1000
  });

  export default AxiosInstance;