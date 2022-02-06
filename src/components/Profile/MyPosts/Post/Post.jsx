import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.item}>
      <img src="https://telegrator.ru/wp-content/uploads/2021/05/chat_avatar-136.jpg"alt="ava"></img>
      <div>
        <span>Like {props.likesCount}</span>
        <span>Dislike</span>
      </div>      
    </div>
  );
}

export default Post;
