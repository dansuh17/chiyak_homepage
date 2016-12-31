import { combineReducers } from 'redux';
import people from './people-reducer';
import peopleInput from './people-input-reducer';

const rootReducer = combineReducers({
  people,
  peopleInput,
});

export default rootReducer;
