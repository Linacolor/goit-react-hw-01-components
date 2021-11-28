import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';

function Statistics({ title, stats }) {
  return (
    <section class={s.statistics}>
      <h2 class={s.title}>{title}</h2>

      <ul class={s.list}>
        <StatisticsList item={stats} />
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
