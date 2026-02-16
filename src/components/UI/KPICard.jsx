import React from 'react';

const KPICard = ({ label, value, sub, badgeClass, badge }) => {
  return (
    <div className="kpi-card">
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-sub">{sub}</div>
      {badge && <div className={`kpi-badge ${badgeClass}`}>{badge}</div>}
    </div>
  );
};

export default KPICard;
