import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


function DialogsItem(props) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}



export default DialogsItem;