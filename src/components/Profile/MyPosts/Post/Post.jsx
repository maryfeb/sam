import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/originals/46/6a/e8/466ae87698cfdbab38b4878ccede6ad4.jpg"alt="ava"/>
      <div>
        <div>{props.message} </div>
        <span>Likes {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;
