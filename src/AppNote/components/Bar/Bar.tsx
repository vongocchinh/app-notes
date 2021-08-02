import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Item from './Item';
import { useSelector } from 'react-redux';
import { deleteNotes, selectNotesAll } from '../../reducer/notes/note';
import { useAppDispatch, useAppSelector } from '../../reducer/store.hook';
import { GET_LOGIN } from '../../reducer/users/user';
// import { GET_NOTES } from '../../Api/Notes';
import { GET_NOTE_API } from './../../reducer/notes/note';



interface BarTS {
}
const Bar: React.FC<BarTS> = () => {
    const dispatch=useAppDispatch();



    const NotesData=useSelector(selectNotesAll);
    const User=useAppSelector(GET_LOGIN);
    const onDelete:deleteNote=(id:string)=>{
        dispatch(deleteNotes(id));
    }

    useEffect(()=>{
        if(User.idUser){
            dispatch(GET_NOTE_API(User.idUser));
        }
    },[User,dispatch])
    const showItemBar=NotesData&&NotesData.map((value,key)=>{
        return <Item key={key} value={value} onDelete={onDelete}  />
    })

    return (
        <div className="bar">
            <div className="title">
                <Link className="add" to="/add">Thêm</Link>
            </div>
            <div className="bar-list">
                    {showItemBar}
            </div>
        </div>
    )
}
export default Bar;