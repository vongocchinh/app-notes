import React from 'react'
import { NavLink } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import RateReviewIcon from '@material-ui/icons/RateReview';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


let deleteIcon: React.ReactElement<typeof ShoppingCartIcon> = <DeleteIcon fontSize="small" color="secondary" />
let reviewIcon :React.ReactElement<typeof ShoppingCartIcon>= <RateReviewIcon fontSize="small" color="primary" />


interface ItemTS{
    value:noteModel,
    onDelete:deleteNote
}
 const Item:React.FC<ItemTS>=({value,onDelete})=> {

    const deleteNote=()=>{
        onDelete(value.id);
    }
    const active = () => {
        var item = document.querySelectorAll('.item');
        console.log(item);
        item.forEach(v => v.addEventListener('click', () => {
            let j = 0;
            item[j++].className = "item";
            v.className = "item active";
        }))
    }
    active();
    return (
        <div className="item">
                <div className="bar-item-top">
                    <NavLink activeClassName="active"  to={`/note/${value.id}`} className="bar-name">
                        <p>{value.title} . </p>
                    </NavLink>
                    <div className="option-bar">
                        <p onClick={deleteNote}>{deleteIcon}</p>
                        <p>{reviewIcon}</p>
                    </div>
                </div>
        </div>
    )
}

export default Item;
