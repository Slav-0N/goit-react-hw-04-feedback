import React from 'react';
import StatisticWrapper from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <StatisticWrapper>
      <h2>Statistics</h2>
      <div>
        <p>Good:</p>
        <span>{good}</span>
      </div>
      <div>
        <p>Neutral:</p>
        <span>{neutral}</span>
      </div>
      <div>
        <p>Bad:</p>
        <span>{bad}</span>
      </div>

      <div>
        <p>Total:</p>
        <span>{total}</span>
      </div>
      <div>
        <p>Positive feedback:</p>
        <span>{positive} %</span>
      </div>
    </StatisticWrapper>
  );
};

export default Statistics;
