import Profile from '../components/Profile/Profile.jsx';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory.jsx';
import FriendList from '../components/FriendList/FriendList.jsx';
import FriendListItem from '../components/FriendListItem/FriendListItem.jsx'
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';


const App = () => {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory transactions={transactions} />
        </>
    );
};

export default App;