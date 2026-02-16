import React from 'react';
import SectionHeader from './UI/SectionHeader';
import Card from './UI/Card';

const ActionPlan = ({ data }) => {
  return (
    <>
      <SectionHeader
        number="09"
        title="90-Day Turnaround Action Plan"
        subtitle="Week-by-week prioritised roadmap for immediate financial stabilisation"
      />

      <Card>
        <div className="timeline">
          {data.phases.map((phase, idx) => (
            <div key={idx} className="timeline-item">
              <div className={`timeline-dot ${phase.dotColor}`}></div>
              <div className="timeline-label">{phase.period}</div>
              <div className="timeline-content">
                <strong>{phase.focus}</strong> {phase.description}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default ActionPlan;
