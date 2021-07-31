import React, { useEffect,  useState } from 'react'
import './../styles/style.css'
import { useSelector } from 'react-redux';
import { RootState, } from '../../reducer/store';
import { selectNotesById, updateNotes } from '../../reducer/notes/note';
import {  useHistory } from 'react-router-dom';
import { useAppDispatch } from './../../reducer/store.hook';

interface HomeTs{
    match:any,
    noteId:noteModel
}
const Category:React.FC<HomeTs>=({match})=> {
    const [input, setInput] = useState('')
    const [text, setText] = useState('')
    const history=useHistory();
    const dispatch=useAppDispatch();
    const onchange=({target:{name,value}}: React.ChangeEvent<HTMLInputElement>)=>{
        setInput(value)
    }
    var id=match.params.id
    const noteId:any =useSelector<RootState>(state=>selectNotesById(state,id));
    useEffect(() => {
        if(noteId){
            setInput(noteId.title);
            setText(noteId.des);
        }else{
            history.push('/');
        }
    }, [noteId,history])
    const onChangeTextArea=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        var value=e.target.value;
        setText(value);
    }
    const onSubmit=(e:React.FormEvent)=>{
        e.preventDefault();

       if(noteId.id){
            var note:noteModel={
                id:noteId.id,
                title:input,
                des:text,
                time:noteId.time
            }
            dispatch(updateNotes(note));
       }else{
            // var note={
            //     name:input,
            //     des:text
            // }
            // setInput('')
            // setText('')
            // console.log(note);
       }
    }
    return (
        <div className="home">
            <div className="form-top">
                <h2>Form Note</h2>
                <form onSubmit={onSubmit}>
                    <h3>Title</h3>
                    <input value={input} name="title" onChange={onchange} type="text" />
                    <h3>Description</h3>
                    <textarea value={text} name="des"  onChange={onChangeTextArea} />
                    <input type="submit" value="Save" />
                </form>
            </div>
        </div>
    )
}
export default Category;