import { getRequest, postRequest, deleteRequest } from './util';

const FIXTURES_URL = 'http://api.football-data.org'

const getRestFixtures = () => getRequest(FIXTURES_URL, '/v1/competitions/467/fixtures', "mode: 'no-cors'")

export default getRestFixtures;
