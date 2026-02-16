import React from 'react';
import SectionHeader from './UI/SectionHeader';
import Alert from './UI/Alert';

const CriticalFlaws = ({ data }) => {
  return (
    <>
      <SectionHeader
        number="06"
        title="Critical Financial Flaws & Root Cause Analysis"
        subtitle="12 major structural gaps identified across four years of audited financials"
      />

      {data.criticalFlaws.map((flaw, idx) => (
        <Alert
          key={idx}
          type={flaw.type}
          icon={flaw.icon}
          title={flaw.title}
        >
          {flaw.description}
        </Alert>
      ))}
    </>
  );
};

export default CriticalFlaws;
