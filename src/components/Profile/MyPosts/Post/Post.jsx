import s from "./Post.module.css";

function Post() {
  return (
    <div className={s.item}>
      <img src="https://telegrator.ru/wp-content/uploads/2021/05/chat_avatar-136.jpg"alt="ava"></img>
      Post 1
      <div>
        <span>Like</span>
        <span>Dislike</span>
      </div>      
    </div>
  );
}

export default Post;
