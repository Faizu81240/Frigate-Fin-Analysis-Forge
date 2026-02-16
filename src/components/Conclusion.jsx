import React from 'react';
import SectionHeader from './UI/SectionHeader';
import Card from './UI/Card';
import Alert from './UI/Alert';

const Conclusion = ({ data }) => {
  return (
    <>
      <SectionHeader
        number="10"
        title="Summary"
        subtitle="The bottom line — what the numbers say"
      />

      <Card title="📌 Summary Metrics — Four Year Snapshot">
        <table className="data-table">
          <thead>
            <tr>
              <th>Key Metric</th>
              <th className="right">FY22</th>
              <th className="right">FY23</th>
              <th className="right">FY24</th>
              <th className="right">FY25</th>
              <th>Trend & Signal</th>
            </tr>
          </thead>
          <tbody>
            {data.summaryMetrics.map((metric, idx) => (
              <tr key={idx} className={metric.highlight ? 'highlight' : ''}>
                <td>{metric.name}</td>
                <td className={`right ${metric.fy22Color || ''}`}>{metric.fy22}</td>
                <td className={`right ${metric.fy23Color || ''}`}>{metric.fy23}</td>
                <td className={`right ${metric.fy24Color || ''}`}>{metric.fy24}</td>
                <td className={`right ${metric.fy25Color || ''}`}>{metric.fy25}</td>
                <td className={metric.trendColor}>{metric.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default Conclusion;
