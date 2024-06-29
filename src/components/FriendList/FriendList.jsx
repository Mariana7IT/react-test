import s from './FriendList.module.css'


const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => (
        <FriendListItem 
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </ul>
  );
};

export default FriendList;