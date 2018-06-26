import { getRequest, postRequest, deleteRequest } from './util';

const getRestResult = () => getRequest('/rest/result');

export default getRestResult;
