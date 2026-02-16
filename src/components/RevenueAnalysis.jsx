import React from 'react';
import SectionHeader from './UI/SectionHeader';
import Card from './UI/Card';
import Alert from './UI/Alert';

const RevenueAnalysis = ({ data }) => {
  return (
    <>
      <SectionHeader
        number="02"
        title="Revenue & Profitability — 4-Year Trend Analysis"
        subtitle="Top-line growth vs. bottom-line destruction | All figures in ₹ Thousands (Rs. '000)"
      />

      <Card title="📊 Complete P&L Statement — FY22 to FY25 (₹ Thousands)">
        <table className="data-table">
          <thead>
            <tr>
              <th>Particulars</th>
              <th className="right">FY 2021-22</th>
              <th className="right">FY 2022-23</th>
              <th className="right">FY 2023-24</th>
              <th className="right">FY 2024-25</th>
              <th className="right">4-Yr CAGR</th>
              <th className="right">YoY Change FY25</th>
            </tr>
          </thead>
          <tbody>
            {data.plData.map((row, idx) => (
              <React.Fragment key={idx}>
                {row.type === 'spacer' ? (
                  <tr><td colSpan="7" style={{height:'8px'}}></td></tr>
                ) : (
                  <tr className={row.class || ''}>
                    <td className={row.class === 'subtotal' || row.class === 'total' ? '' : row.highlight ? 'font-semi' : ''}>{row.particulars}</td>
                    <td className={`right ${row.fy22Class || ''}`}>{row.fy22}</td>
                    <td className={`right ${row.fy23Class || ''}`}>{row.fy23}</td>
                    <td className={`right ${row.fy24Class || ''}`}>{row.fy24}</td>
                    <td className={`right ${row.fy25Class || ''}`}>{row.fy25}</td>
                    <td className={`right ${row.cagrClass || ''}`}>{row.cagr}</td>
                    <td className={`right ${row.yoyClass || ''}`}>{row.yoy}</td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </Card>

      <Alert
        type={data.alert.type}
        icon={data.alert.icon}
        title={data.alert.title}
      >
        {data.alert.description}
      </Alert>
    </>
  );
};

export default RevenueAnalysis;
