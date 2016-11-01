import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import Login from './login';
import { collapseＭenu, menu } from './main';

const rootReducer = combineReducers(Object.assign(
  {
    routing: routerReducer
  },
  {
    form: formReducer,
    login: Login,
    collapseＭenu: collapseＭenu,
    menu: menu
  }
));

export default rootReducer;