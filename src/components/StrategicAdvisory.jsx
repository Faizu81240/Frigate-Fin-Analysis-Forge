import React from 'react';
import SectionHeader from './UI/SectionHeader';

const StrategicAdvisory = ({ data }) => {
  return (
    <>
      <SectionHeader
        number="08"
        title="Strategic Advisory Recommendations"
        subtitle="Prioritised across three horizons — Immediate (0–90 days), Short-Term (90 days–12 months), Long-Term (12–36 months)"
      />

      <div className="rec-grid">
        {data.recommendations.map((rec, idx) => (
          <div key={idx} className="rec-card">
            <div className={`rec-header ${rec.priority}`}>
              {rec.icon} {rec.title || rec.subtitle}
            </div>
            {rec.subtitle && rec.title && (
              <div className="rec-subtitle">
                <strong>{rec.subtitle}</strong>
              </div>
            )}
            <div className="rec-body">
              <p>{rec.rootCause}</p>
              {rec.actions && rec.actions.length > 0 && (
                <ul>
                  {rec.actions.map((action, actionIdx) => (
                    <li key={actionIdx}>{action}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StrategicAdvisory;
