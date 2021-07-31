
import { NoteModel } from '../reducer/notes/note';
export const ADD_NOTES_AFECTH=(note:NoteModel):Promise<NoteModel>=>new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(note.time===''){
            reject('error 201');
        }
        resolve(note);
    }, 1000);
})