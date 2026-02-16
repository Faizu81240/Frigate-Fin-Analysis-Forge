import React from 'react';
import SectionHeader from './UI/SectionHeader';
import Card from './UI/Card';
import Alert from './UI/Alert';

const FinancialRatios = ({ data }) => {
  return (
    <>
      <SectionHeader
        number="03"
        title="Exhaustive Financial Ratio Analysis"
        subtitle="40+ ratios computed across liquidity, profitability, efficiency, leverage & solvency categories"
      />

      {/* Liquidity Ratios */}
      <Card title="💧 A. LIQUIDITY RATIOS — Ability to Meet Short-Term Obligations">
        <table className="data-table">
          <thead>
            <tr>
              <th>Ratio</th>
              <th>Formula</th>
              <th className="right">FY23</th>
              <th className="right">FY24 Value</th>
              <th className="right">FY25 Value</th>
              <th className="right">Benchmark</th>
              <th>Signal</th>
              <th>Assessment</th>
            </tr>
          </thead>
          <tbody>
            {data.liquidityRatios.map((ratio, idx) => (
              <tr key={idx} className={ratio.highlight ? 'highlight' : ''}>
                <td className="font-semi">{ratio.name}</td>
                <td className="text-muted">{ratio.formula}</td>
                <td className={`right ${ratio.fy23Color}`}>{ratio.fy23}</td>
                <td className="right">{ratio.fy24}</td>
                <td className={`right ${ratio.fy25Color} font-semi`}>{ratio.fy25}</td>
                <td className="right">{ratio.benchmark}</td>
                <td><span className={`pill ${ratio.signalClass}`}>{ratio.signal}</span></td>
                <td>{ratio.assessment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Profitability Ratios */}
      <Card title="📈 B. PROFITABILITY RATIOS — Quality & Sustainability of Earnings">
        <table className="data-table">
          <thead>
            <tr>
              <th>Ratio</th>
              <th>Formula</th>
              <th className="right">FY22</th>
              <th className="right">FY23</th>
              <th className="right">FY24</th>
              <th className="right">FY25</th>
              <th className="right">Benchmark</th>
              <th>Signal</th>
            </tr>
          </thead>
          <tbody>
            {data.profitabilityRatios.map((ratio, idx) => (
              <tr key={idx} className={ratio.highlight ? 'highlight' : ''}>
                <td className="font-semi">{ratio.name}</td>
                <td className="text-muted">{ratio.formula}</td>
                <td className={`right ${ratio.fy22Color}`}>{ratio.fy22}</td>
                <td className={`right ${ratio.fy23Color}`}>{ratio.fy23}</td>
                <td className={`right ${ratio.fy24Color}`}>{ratio.fy24}</td>
                <td className={`right ${ratio.fy25Color} font-semi`}>{ratio.fy25}</td>
                <td className="right">{ratio.benchmark}</td>
                <td><span className={`pill ${ratio.signalClass}`}>{ratio.signal}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Efficiency Ratios */}
      <Card title="⚙️ C. EFFICIENCY / ACTIVITY RATIOS — Asset & Working Capital Utilisation">
        <table className="data-table">
          <thead>
            <tr>
              <th>Ratio</th>
              <th>Formula</th>
              <th className="right">FY23</th>
              <th className="right">FY24</th>
              <th className="right">FY25</th>
              <th className="right">Benchmark</th>
              <th>Signal</th>
              <th>Key Issue</th>
            </tr>
          </thead>
          <tbody>
            {data.efficiencyRatios.map((ratio, idx) => (
              <tr key={idx} className={ratio.highlight ? 'highlight' : ''}>
                <td className="font-semi">{ratio.name}</td>
                <td className="text-muted">{ratio.formula}</td>
                <td className={`right ${ratio.fy23Color}`}>{ratio.fy23}</td>
                <td className="right">{ratio.fy24}</td>
                <td className={`right ${ratio.fy25Color} font-semi`}>{ratio.fy25}</td>
                <td className="right">{ratio.benchmark}</td>
                <td><span className={`pill ${ratio.signalClass}`}>{ratio.signal}</span></td>
                <td>{ratio.issue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Solvency & Leverage Ratios */}
      <Card title="🏦 D. SOLVENCY & LEVERAGE RATIOS — Capital Structure & Debt Risk">
        <table className="data-table">
          <thead>
            <tr>
              <th>Ratio</th>
              <th>Formula</th>
              <th className="right">FY22</th>
              <th className="right">FY23</th>
              <th className="right">FY24</th>
              <th className="right">FY25</th>
              <th className="right">Benchmark</th>
              <th>Signal</th>
            </tr>
          </thead>
          <tbody>
            {data.solvencyRatios.map((ratio, idx) => (
              <tr key={idx} className={ratio.highlight ? 'highlight' : ''}>
                <td className="font-semi">{ratio.name}</td>
                <td className="text-muted">{ratio.formula}</td>
                <td className={`right ${ratio.fy22Color}`}>{ratio.fy22}</td>
                <td className={`right ${ratio.fy23Color}`}>{ratio.fy23}</td>
                <td className={`right ${ratio.fy24Color}`}>{ratio.fy24}</td>
                <td className={`right ${ratio.fy25Color} font-semi`}>{ratio.fy25}</td>
                <td className="right">{ratio.benchmark}</td>
                <td><span className={`pill ${ratio.signalClass}`}>{ratio.signal}</span></td>
              </tr>
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

export default FinancialRatios;
