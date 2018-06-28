import getRestResult from '../api/result';
import getRestFixtures from '../api/fixtures';

export const RESULT_GET_SUCCEEDED = 'RESULT_GET_SUCCEEDED';
export const RESULT_GET_FAILED = 'RESULT_GET_FAILED';
export const getResult = (dispatch) => () =>
  getRestResult()
  .then(result =>
    dispatch({
      type: RESULT_GET_SUCCEEDED,
      data: result
    })
  );

export const FIXTURES_GET_SUCCEEDED = 'FIXTURES_GET_SUCCEEDED';
export const FIXTURES_GET_FAILED = 'FIXTURES_GET_FAILED';
export const getFixtures = (dispatch) => () =>
  getRestFixtures()
  .then(result =>
    dispatch({
      type: FIXTURES_GET_SUCCEEDED,
      data: result
    })
  );
