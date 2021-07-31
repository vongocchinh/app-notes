import React from 'react'
import { Link } from 'react-router-dom';
import Item from './Item';
import { useSelector } from 'react-redux';
import { deleteNotes, selectNotesAll } from '../../reducer/notes/note';
import { useAppDispatch } from '../../reducer/store.hook';



interface BarTS {
}
const Bar: React.FC<BarTS> = () => {
    const dispatch=useAppDispatch();



    const NotesData=useSelector(selectNotesAll);

    const onDelete=(id:string)=>{
        dispatch(deleteNotes(id));
    }
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