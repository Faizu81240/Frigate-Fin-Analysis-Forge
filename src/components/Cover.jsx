import React from 'react';

const Cover = ({ data }) => {
  return (
    <div className="cover">
      <img src="/Logo.png" alt="Company Logo" className="cover-logo" />
      <div className="cover-label">Confidential</div>
      <h1>{data.title}</h1>
      <h2>{data.subtitle}</h2>
      <div className="cover-meta">
        <div className="cover-meta-item">
          <div className="label">Company</div>
          <div className="value">{data.company}</div>
        </div>
        <div className="cover-meta-item">
          <div className="label">Period Covered</div>
          <div className="value">{data.period}</div>
        </div>
        <div className="cover-meta-item">
          <div className="label">Prepared For</div>
          <div className="value">{data.preparedFor}</div>
        </div>
        <div className="cover-meta-item">
          <div className="label">Compiled Date</div>
          <div className="value">{data.compiledDate}</div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
