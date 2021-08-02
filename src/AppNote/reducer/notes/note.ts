import {createSlice,createAsyncThunk,createEntityAdapter,PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../store';
import { ADD_NOTES_AFECTH, GET_NOTES } from '../../Api/Notes';





// 

export interface NoteModel{
    id:string,
    title:string,
    des:string,
    time:string,
    userId:string | null | undefined
}





interface InitialStateTS{
    messageError:undefined,
    validationUpdateNotes?:ValidationUpdateNotes
    validationDeleteNotes?:ValidationDeleteNotes
    validationAddNotes?:ValidationAddNotes
}


// thunk;


export const ADD_NOTE_API=createAsyncThunk("notes/addNote",async (notes:NoteModel)=>{
    var result=await ADD_NOTES_AFECTH(notes);
    return result;
})


export const GET_NOTE_API=createAsyncThunk("notes/getNotes", async (userId:string)=>{
    var result=await GET_NOTES(userId);
    return result
})

export enum ValidationAddNotes{
    Fulfilled,
    Pending,
    Reject
}


export enum ValidationDeleteNotes{
    Fulfilled,
    Pending,
    Reject
}

export enum ValidationUpdateNotes{
    Fulfilled,
    Pending,
    Reject
}









const noteAdapter=createEntityAdapter<NoteModel>({
    selectId:state=>state.id
})
const InitialState=noteAdapter.getInitialState<InitialStateTS>({
    messageError:undefined,
    validationAddNotes:undefined,
    validationDeleteNotes:undefined,
    validationUpdateNotes:undefined
})
const data : NoteModel[]=[];




const InitialStateData=noteAdapter.upsertMany(InitialState,data);




const NoteSlices=createSlice({
    name:"notes",
    initialState:InitialStateData,
    reducers:{
        addNote:(state, action: PayloadAction<NoteModel>)=>{
            noteAdapter.upsertOne(state,action.payload);
        },
        deleteNotes:(state, action: PayloadAction<string>)=>{
            noteAdapter.removeOne(state,action.payload);
        },
        updateNotes:(state, action: PayloadAction<NoteModel>)=>{
            noteAdapter.setOne(state,action.payload);
        },
    },
    extraReducers:builder=>{
        builder.addCase(ADD_NOTE_API.fulfilled,(state,action: PayloadAction<NoteModel>)=>{
            noteAdapter.upsertOne(state,action.payload);
            state.messageError=undefined;
            state.validationAddNotes=ValidationAddNotes.Fulfilled
        });
        builder.addCase(GET_NOTE_API.fulfilled,(state,action: PayloadAction<Array<NoteModel> >)=>{
            noteAdapter.upsertMany(state,action.payload);
            state.messageError=undefined;
        })
    }
})


export const {
    selectAll:selectNotesAll,
    selectById:selectNotesById
}=noteAdapter.getSelectors<RootState>(state=>state.Notes);


export const {addNote,deleteNotes,updateNotes}=NoteSlices.actions;
export default NoteSlices.reducer;

export const GET_VALIDATION_ADD_NOTE=(state:RootState)=>state.Notes.validationAddNotes;