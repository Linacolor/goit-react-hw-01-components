import s from './Profile.module.css';

function Profile() {
  return (
    <div class={s.profile}>
      <div class={s.description}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          class={s.avatar}
        />
        <p class={s.name}>Petra Marica</p>
        <p class={s.tag}>@pmarica</p>
        <p class={s.location}>Salvador, Brasil</p>
      </div>

      <ul class={s.stats}>
        <li>
          <span class={s.label}>Followers</span>
          <span class={s.quantity}>1000</span>
        </li>
        <li>
          <span class={s.label}>Views</span>
          <span class={s.quantity}>2000</span>
        </li>
        <li>
          <span class={s.label}>Likes</span>
          <span class={s.quantity}>3000</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;
