import * as types from './action-types';

export const updateName = name => ({
  type: types.UPDATE_NAME,
  name,
});

export const clearName = () => ({
  type: types.CLEAR_NAME,
  name: {},
});
