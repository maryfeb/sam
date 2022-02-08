import s from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts() {
    let posts = [
        {id: 0, message:'Hi, how are you?', likesCount: 15},
        {id: 1, message: "Let it snow", likesCount: 25},
        {id: 2, message: "It's my vacation", likesCount: 22},
        {id: 3, message: "It's my first post", likesCount: 25},
    ];

    let myPostsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

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
