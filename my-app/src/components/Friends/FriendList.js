import s from './Friends.module.css';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(e => (
        <FriendListItem
          avatar={e.avatar}
          name={e.name}
          isOnline={e.isOnline}
          key={e.id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
