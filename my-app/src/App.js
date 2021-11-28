// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/FriendList';
import Statistics from './components/Statistics/Statistics';
import Transactions from './components/Transactions/Transactions';
import user from './dataJson/user.json';
import data from './dataJson/data.json';
import friends from './dataJson/friends.json';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Friends friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <Transactions />
    </div>
  );
}
export default App;
