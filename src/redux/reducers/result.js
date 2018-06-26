import {
  RESULT_GET_FAILED,
  RESULT_GET_SUCCEEDED,
} from '../actions';

const initialState = {
  result: [],
  result_get_failed: true,
};


const resultReducer = (state = [], action) => {
  switch (action.type) {
    case RESULT_GET_SUCCEEDED:
      return action.data;
    case RESULT_GET_FAILED:
      return initialState;
    default:
      return state;
  }
};

export default resultReducer;
