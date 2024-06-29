import s from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={s.friendListItem} key={id}>
      <div className={s.friend}>
        <img className={s.friendImage} src={avatar} alt="Avatar" />
        <p className={s.nameFriend}>{name}</p>
         <p className={isOnline ? s.friendOnline : s.friendOffline}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </li>
  );
};



export default FriendListItem;