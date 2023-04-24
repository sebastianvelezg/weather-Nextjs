import { combineReducers } from '@reduxjs/toolkit';
import menuReducer from "@/store/reducers/menu.slice";

const rootReducer = combineReducers({
  menu: menuReducer,
});

export default rootReducer;