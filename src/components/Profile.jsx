import s from './Profile.module.css';

function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img
          className={s.main}
          src="https://avatars.mds.yandex.net/get-pdb/1525435/68a83acf-c98e-40ea-9ba4-1a09de360c2c/s600?webp=false"
          alt="main"
        ></img>
      </div>
      <div>
        <img
          className={s.avatar}
          src="https://bugaga.ru/uploads/posts/2017-03/1489051999_kotik-hosiko-23.jpg"
          alt="avatar"
        ></img>
        +descr
      </div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
