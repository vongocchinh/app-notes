import {createSlice,createAsyncThunk,PayloadAction} from '@reduxjs/toolkit';
import { LoginFirebaseASYNC, LogoutFirebaseASYNC } from '../../Api/Login';
import { RootState } from '../store';

export enum ValidationLogin{
    Fulfilled,
    Pending,
    Reject
}

export enum ValidationLogout{
    Fulfilled,
    Pending,
    Reject
}


interface State{
    validationLogin?:ValidationLogin,
    validationLogout?:ValidationLogout,
    idUser:string | null
}

export interface UserLoginTS{
    name:string,
    pass:string
}



export const LoginUser_Firebase=createAsyncThunk("Users/LoginUser",async (user:UserLoginTS)=>{
    var result=await(LoginFirebaseASYNC(user));
    return result;
})

export const LogOutUser_Firebase=createAsyncThunk("Users/LogoutUser",async ()=>{
    var result=await(LogoutFirebaseASYNC());
    return result;
})



let state:State={
    validationLogin:undefined,
    idUser:sessionStorage.getItem('token')?sessionStorage.getItem('token'):''
}

const UserSlice=createSlice({
    name:"Users",
    initialState:state,
    reducers:{
        LoginUser:(state,action:PayloadAction<UserLoginTS>)=>{
            console.log(action.payload);
        },
        LogoutUser:(state,action)=>{

        },
        RELOAD_VALIDATION:(state,action)=>{
            state={
                ...state,
                validationLogin:undefined,
                validationLogout:undefined
            }
        }
    },
    extraReducers:builder=>{
        builder.addCase(LoginUser_Firebase.fulfilled,(state,action:any)=>{
            sessionStorage.setItem("token",action.payload);
           return {
               ...state,
               idUser:action.payload,
               validationLogin:ValidationLogin.Fulfilled
           }
        });
        builder.addCase(LoginUser_Firebase.pending,(state,action)=>{
            return{
                ...state,
                validationLogin:ValidationLogin.Pending
            }
        })
        builder.addCase(LogOutUser_Firebase.fulfilled,(state,action:any)=>{
            sessionStorage.removeItem("token");
            return {
                ...state,
                idUser:"",
                validationLogin:undefined,
                validationLogout:ValidationLogout.Fulfilled
            }
        });
        builder.addCase(LogOutUser_Firebase.pending,(state,action)=>{
            return {
                ...state,
                validationLogout:ValidationLogout.Pending
            }
        })
    }
})


export const {LoginUser}=UserSlice.actions;

export default UserSlice.reducer;


export const GET_LOGIN=(state:RootState)=>state.Users;

export const GET_VALIDATION_LOGIN=(state:RootState)=>state.Users.validationLogin;
export const GET_VALIDATION_LOGOUT=(state:RootState)=>state.Users.validationLogout;