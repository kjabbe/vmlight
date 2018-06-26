import {
  RESULT_GET_SUCCEEDED
} from '../actions';

const resultReducer = (state = [], action) => {
  switch (action.type) {
    case RESULT_GET_SUCCEEDED:
      return action.data;
    default:
      return state;
  }
};

export default resultReducer;
