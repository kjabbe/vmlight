import getRestResult from '../api/result';

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
