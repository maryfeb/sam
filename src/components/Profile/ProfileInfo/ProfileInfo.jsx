import s from "./ProfileInfo.module.css";

function ProfileInfo() {
    return (
        <div>
            <div className={s.profileWrapper}>
                <img
                    className={s.main}
                    src="https://sun9-69.userapi.com/impg/82r834T7jaSgQ9I1QmhWY1EZsFt0S8Pd2T7SfQ/rKV-yLQblLk.jpg?size=1836x712&quality=96&sign=28593aca70e0db00d53d941ad8bfdcdb&type=album"
                    alt="main"
                />
            </div>
            <div className={s.descriptionBlock}>
                ava+descr
            </div>
        </div>
    );

}


export default ProfileInfo;