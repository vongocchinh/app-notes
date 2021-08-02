/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './../styles/style.css'
import {nanoid} from 'nanoid'
import { useAppDispatch, useAppSelector } from '../../reducer/store.hook';
import {  ADD_NOTE_API } from '../../reducer/notes/note';
import { useHistory } from 'react-router-dom';
import { GET_LOGIN } from './../../reducer/users/user';
interface HomeTs{

}
const Add:React.FC<HomeTs>=()=> {
    const history=useHistory();
    const dispatch=useAppDispatch();
    const userLogin=useAppSelector(GET_LOGIN);
    useEffect(() => {
        var id:string= nanoid();
        if(userLogin.idUser){
            var notes:noteModel={
                id:id,
                title:"Hãy nhập tiêu đề ở đây ....",
                des:"Chi tiết....",
                time:(new Date()).toString(),
                userId:userLogin.idUser
            }
            dispatch(ADD_NOTE_API(notes));
            history.push(`/note/${id}`)
        }else{
            var notesNot:noteModel={
                id:id,
                title:"Hãy nhập tiêu đề ở đây ....",
                des:"Chi tiết....",
                time:(new Date()).toString(),
                userId:""
            }
            dispatch(ADD_NOTE_API(notesNot));
            history.push(`/note/${id}`)
        }
        
       
    }, [1,userLogin])
    return (
        <div className="home">
            {/* <div className="form-top">
                <h2>Form Note</h2>
                <form onSubmit={onSubmit}>
                    <h3>Title</h3>
                    <input defaultValue={input} name="title" onChange={onchange} type="text" />
                    <h3>Description</h3>
                    <textarea defaultValue={text} name="des"  onChange={onChangeTextArea} />
                    <input type="submit" value="Save" />
                </form>
            </div> */}
        </div>
    )
}
export default Add;