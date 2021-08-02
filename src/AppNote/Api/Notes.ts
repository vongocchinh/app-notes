
import { db } from '../config/firebase';
import { NoteModel } from '../reducer/notes/note';
export const ADD_NOTES_AFECTH=(note:NoteModel):Promise<NoteModel>=>new Promise((resolve,reject)=>{
    db.collection("notes").add({title:note.title,des:note.des,time:note.time,id:note.id,userId:note.userId}).then((res=>{
        const noteNew:NoteModel={
            title:note.title,des:note.des,time:note.time,id:note.id,userId:note.userId
        };
        resolve(noteNew);
    })).catch(er=>{
        console.log(er);
    })
})



export const GET_NOTES=(userId:string):Promise<Array<NoteModel>>=> new Promise((resolve,reject)=>{
    if(userId){
        db.collection("notes").where("userId",'==',userId).get().then((res)=>{
            var dataNotes:NoteModel[] =[];
            res.forEach(doc=>{
                let note={
                    title:doc.data().title,des:doc.data().des,time:doc.data().time,id:doc.data().id,userId:doc.data().userId
                }
                dataNotes.push(note);
            })
            resolve(dataNotes);
        })
    }
})


export const Update_Notes=(note:NoteModel):Promise<NoteModel>=>new Promise ((resolve,reject)=>{ 
    db.collection("notes").where("id",'==',note.id).get().then(res=>{
        res.forEach(doc=>{
            db.collection("notes").doc(doc.id).update(note).then(res=>{
                resolve(note);
                return;
            }).catch(er=>{
                console.log(er);
            })
        })
    })
})