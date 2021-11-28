import s from './Friends.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li class={s.item}>
      <span class={isOnline ? s.online : s.offline}></span>
      <img class={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p class={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
