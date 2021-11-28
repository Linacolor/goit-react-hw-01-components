import s from './Statistics.module.css';

export default function StatList({ item }) {
  // console.log('item', item);

  return item.map(e => {
    return (
      <li
        key={e.id}
        className={s.item}
        style={{
          backgroundColor: `rgb(${Math.round(Math.random() * 256)},${Math.round(
            Math.random() * 256,
          )},${Math.round(Math.random() * 256)})`,
        }}
      >
        <span className={s.label}>{e.label}</span>
        <span className={s.percentage}>{e.percentage}</span>
      </li>
    );
  });
}
