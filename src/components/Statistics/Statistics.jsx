import './Statistics.css';
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div className="Statistics__container">
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {(isNaN(positivePercentage)
                ? 0
                : positivePercentage)} %</p>
        </div>
    )
};

export default Statistics;