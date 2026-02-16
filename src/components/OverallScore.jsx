import React from 'react';

const OverallScore = ({ data }) => {
  return (
    <div className="verdict">
      <div className="verdict-label">{data.label}</div>
      <div className="verdict-score">{data.score}</div>
      <div className="verdict-title">{data.title}</div>
      <div className="verdict-desc">{data.description}</div>
    </div>
  );
};

export default OverallScore;
