/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './../styles/style.css'
import {nanoid} from 'nanoid'
import { useAppDispatch } from '../../reducer/store.hook';
import { addNote } from '../../reducer/notes/note';
import { useHistory } from 'react-router-dom';
interface HomeTs{

}
const Add:React.FC<HomeTs>=()=> {
    // const [input, setInput] = useState('')
    // const [text, setText] = useState('')
    const history=useHistory();
    const dispatch=useAppDispatch();
    // const onchange=({target:{name,value}}: React.ChangeEvent<HTMLInputElement>)=>{
    //     setInput(value)
    // }

    // const onChangeTextArea=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    //     var value=e.target.value;
    //     setText(value);
    // }
    // const onSubmit=(e:React.FormEvent)=>{
    //     e.preventDefault();
    //     var note={
    //         name:input,
    //         des:text
    //     }
    //     setInput('')
    //     setText('')
    //     console.log(note);
    // }
    useEffect(() => {
        var id:string= nanoid();
        var notes:noteModel={
            id:id,
            title:"Hãy nhập tiêu đề ở đây ....",
            des:"Chi tiết....",
            time:(new Date()).toString()
        }
        dispatch(addNote(notes));
        history.push(`/note/${id}`)
    }, [1])
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