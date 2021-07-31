import {configureStore} from '@reduxjs/toolkit'
import Notes from './notes/note'

const store=configureStore({
    reducer:{
        Notes
    }
})


export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch;
export default store;