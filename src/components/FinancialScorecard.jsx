import React from 'react';
import SectionHeader from './UI/SectionHeader';
import Card from './UI/Card';

const FinancialScorecard = ({ data }) => {
  return (
    <>
      <SectionHeader
        number="07"
        title="Financial Health Scorecard"
        subtitle="Year-over-year dimensional assessment (FY23–FY25) — scored out of 5"
      />

      <Card title="📊 Financial Health Scorecard — 6-Dimensional Assessment">
        <table className="data-table">
          <thead>
            <tr>
              <th>Financial Dimension</th>
              <th className="right">FY23 Score</th>
              <th className="right">FY24 Score</th>
              <th className="right">FY25 Score</th>
              <th>Key Issue</th>
            </tr>
          </thead>
          <tbody>
            {data.dimensions.map((item, idx) => (
              <tr key={idx} className={item.highlight ? 'highlight' : ''}>
                <td className="font-semi">{item.dimension}</td>
                <td className={`right ${item.fy23Color}`}>{item.fy23}</td>
                <td className={`right ${item.fy24Color}`}>{item.fy24}</td>
                <td className={`right ${item.fy25Color} font-semi`}>{item.fy25}</td>
                <td>{item.keyIssue}</td>
              </tr>
            ))}
            <tr className="total">
              <td className="font-bold">OVERALL SCORE</td>
              <td className={`right ${data.overall.fy23Color}`}>{data.overall.fy23}</td>
              <td className={`right ${data.overall.fy24Color}`}>{data.overall.fy24}</td>
              <td className={`right ${data.overall.fy25Color} font-bold`}>{data.overall.fy25}</td>
              <td className="font-bold">{data.overall.status}</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default FinancialScorecard;
