// import {configureStore} from '@reduxjs/toolkit'
// import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
// import menuReducer from "./reducers/menu.reducer";
//
//
// const store = configureStore({
//     reducer: {
//         menu: menuReducer,
//     },
// })
//
// export type stateType = ReturnType<typeof store.getState>
// // export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => typeof store.dispatch = useDispatch;// Export a hook that can be reused to resolve types
// export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;// Export a hook that can be reused to resolve types
// export default store
//
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


// Second

// import {configureStore} from '@reduxjs/toolkit';
// import {createWrapper} from 'next-redux-wrapper';
// import rootReducer from './rootReducer';
//
// const makeStore = () => {
//     let process = {env: {NODE_ENV: 'production'}};
//     const store = configureStore({
//         reducer: rootReducer,
//         devTools: process.env.NODE_ENV !== 'production',
//     });
//
//     return store;
// };
//
// export type RootState = ReturnType<typeof rootReducer>;
//
// const wrapper = createWrapper(makeStore);
//
// export default wrapper;


import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import rootReducer from "@/store/rootReducer";

let process = {env: {NODE_ENV: 'development'}}
export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
