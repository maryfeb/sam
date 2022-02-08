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
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Andrey'},
        {id: 6, name: 'Valera'}
    ];

    let messages = [
        {id: 0, message: 'Hi'},
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'Yo'},
    ];

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messagesElement = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs;