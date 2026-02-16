import React from 'react';
import SectionHeader from './UI/SectionHeader';
import KPICard from './UI/KPICard';

const ExecutiveSummary = ({ data }) => {
  return (
    <>
      <SectionHeader
        number="01"
        title="Executive Summary — Financial Snapshot"
        subtitle="Critical financial health indicators at a glance | All figures in ₹ (INR)"
      />

      <div className="verdict">
        <div className="verdict-label">{data.verdict.label}</div>
        <div className="verdict-score">{data.verdict.score}</div>
        <div className="verdict-title">{data.verdict.title}</div>
        <div className="verdict-desc">{data.verdict.description}</div>
      </div>
      
      <div className="kpi-grid">
        {data.kpis.map((kpi, idx) => (
          <KPICard
            key={idx}
            label={kpi.label}
            value={kpi.value}
            sub={kpi.sub}
            badgeClass={kpi.badgeClass}
            badge={kpi.badge}
          />
        ))}
      </div>


    </>
  );
};

export default ExecutiveSummary;
