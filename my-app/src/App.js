// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import Statistics from './components/Statistics/Statistics';
import Transactions from './components/Transactions/Transactions';

function App() {
  return (
    <div>
      <Profile />
      <Friends />
      <Statistics />
      <Transactions />
    </div>
  );
}
export default App;
