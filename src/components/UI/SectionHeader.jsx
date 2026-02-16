import React from 'react';

const SectionHeader = ({ number, title, subtitle }) => {
  return (
    <div className="section-header">
      <div className="section-number">{number}</div>
      <div>
        <div className="section-title">{title}</div>
        {subtitle && <div className="section-subtitle">{subtitle}</div>}
      </div>
    </div>
  );
};

export default SectionHeader;
