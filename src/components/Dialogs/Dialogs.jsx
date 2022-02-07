import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DialogsItem(props) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

function Message(props) {
    return <div className={s.message}>{props.message}</div>
}

function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name='Viktor' id='1'/>
                <DialogsItem name='Dimych' id='2'/>
                <DialogsItem name='Sveta' id='3'/>
                <DialogsItem name='Sasha' id='4'/>
                <DialogsItem name='Andrey' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Yo'/>
            </div>
        </div>
    );
}

export default Dialogs;