import s from "./ProfileInfo.module.css";

function ProfileInfo() {
    return (
        <div>
            <div className={s.profileWrapper}>
                <img
                    className={s.main}
                    src="https://i.pinimg.com/originals/46/6a/e8/466ae87698cfdbab38b4878ccede6ad4.jpg"
                    alt="main"
                />
            </div>
            <div className={s.descriptionBlock}/>
        </div>
    );

}


export default ProfileInfo;