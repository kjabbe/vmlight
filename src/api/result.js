import { getRequest, postRequest, deleteRequest } from './util';

const API_URL = 'http://localhost:5000'

const getRestResult = () => getRequest(API_URL, '/rest/result');

export default getRestResult;
