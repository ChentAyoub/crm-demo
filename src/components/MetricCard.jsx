import React from 'react';
import './MetricCard.css';

const MetricCard = ({ title, value, trend, isPositive }) => {
  return (
    <div className="metric-card glass-panel card-hover animate-slide-in">
      <h3 className="metric-title">{title}</h3>
      <div className="metric-content">
        <div className="metric-value">{value}</div>
        <div className={`metric-trend ${isPositive ? 'positive' : 'negative'}`}>
          {trend}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
