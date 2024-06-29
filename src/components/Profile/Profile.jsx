import s from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {

  return (
    <div className={s.profile}>
  
  <div className={s.description}>
        <img className={s.avatar} src={image} alt="User avatar"/>
        <p className={s.titleName}>{name}</p>
        <p className={s.title}>@{tag}</p>
        <p className={s.title}>{location}</p>
  </div>
  
    <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.statsTitle}>Followers</span>
          <span className={s.statsTitleElement}>{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsTitle}>Views</span>
          <span className={s.statsTitleElement}>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsTitle}>Likes</span>
          <span className={s.statsTitleElement}>{stats.likes}</span>
        </li>
    </ul>
</div>
  );
};

export default Profile;