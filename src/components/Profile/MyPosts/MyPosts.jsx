import s from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts(props) {


    let myPostsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (

        <div className={s.postsBlock}>

                <h3>My posts</h3>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>New post</div>
                <div className={s.posts}>
                    {myPostsElement}
                </div>
        </div>
    );
}

export default MyPosts;
