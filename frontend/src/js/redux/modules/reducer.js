import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import Sample from './Sample';
import join from './join';

export default combineReducers({
  Sample,
  join,
  form
});
