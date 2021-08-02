import {configureStore} from '@reduxjs/toolkit'
import Notes from './notes/note'
import Users from './users/user';
const store=configureStore({
    reducer:{
        Notes,
        Users
    }
})


export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch;
export default store;