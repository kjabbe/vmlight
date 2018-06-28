import {
  FIXTURES_GET_FAILED,
  FIXTURES_GET_SUCCEEDED,
} from '../actions';

const initialState = {
  fixtures: [],
  fixtures_get_failed: true,
};


const fixturesReducer = (state = [], action) => {
  switch (action.type) {
    case FIXTURES_GET_SUCCEEDED:
      return action.data;
    case FIXTURES_GET_FAILED:
      return initialState;
    default:
      return state;
  }
};

export default fixturesReducer;
