import * as types from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_NAME:
      return Object.assign({}, action.name);
    case types.CLEAR_NAME:
      return {};
    default:
      return state;
  }
};
