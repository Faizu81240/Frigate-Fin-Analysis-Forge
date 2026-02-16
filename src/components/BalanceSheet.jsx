import React from 'react';
import SectionHeader from './UI/SectionHeader';
import Card from './UI/Card';

const BalanceSheet = ({ data }) => {
  return (
    <>
      <SectionHeader
        number="04"
        title="Balance Sheet Deep Dive — Asset Quality & Liability Structure"
        subtitle="Detailed breakdown of financial position as at 31st March 2025 vs 31st March 2024"
      />

      <div className="two-col">
        {/* Assets Side */}
        <Card title="📋 Assets Side — FY25 vs FY24 (₹ Thousands)">
          <table className="data-table">
            <thead>
              <tr>
                <th>Asset Head</th>
                <th className="right">FY25</th>
                <th className="right">FY24</th>
                <th className="right">Change</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="font-semi text-muted" colSpan="4">NON-CURRENT ASSETS</td></tr>
              {data.assets.nonCurrent.map((asset, idx) => (
                <tr key={idx} className={asset.highlight ? 'highlight' : ''}>
                  <td className={asset.highlight ? 'font-semi' : ''}>{asset.name}</td>
                  <td className={`right ${asset.fy25Color || ''}`}>{asset.fy25}</td>
                  <td className="right">{asset.fy24}</td>
                  <td className={`right ${asset.changeColor}`}>{asset.change}</td>
                </tr>
              ))}
              <tr className="subtotal">
                <td>Total Non-Current Assets</td>
                <td className="right">~1,01,266</td>
                <td className="right">~1,55,563</td>
                <td className="right text-red">-35%</td>
              </tr>
              
              <tr><td className="font-semi text-muted" colSpan="4">CURRENT ASSETS</td></tr>
              {data.assets.current.map((asset, idx) => (
                <tr key={idx} className={asset.highlight ? 'highlight' : ''}>
                  <td className={asset.highlight ? 'font-semi' : ''}>{asset.name}</td>
                  <td className={`right ${asset.fy25Color || ''}`}>{asset.fy25}</td>
                  <td className="right">{asset.fy24}</td>
                  <td className={`right ${asset.changeColor}`}>{asset.change}</td>
                </tr>
              ))}
              <tr className="subtotal">
                <td>Total Current Assets</td>
                <td className="right">1,41,526</td>
                <td className="right">65,737</td>
                <td className="right text-green">+115%</td>
              </tr>
              
              <tr className="total">
                <td>TOTAL ASSETS</td>
                <td className="right">2,37,370</td>
                <td className="right">2,22,935</td>
                <td className="right">+6.5%</td>
              </tr>
            </tbody>
          </table>
        </Card>

        {/* Liabilities Side */}
        <Card title="📋 Liabilities Side — FY25 vs FY24 (₹ Thousands)">
          <table className="data-table">
            <thead>
              <tr>
                <th>Liability Head</th>
                <th className="right">FY25</th>
                <th className="right">FY24</th>
                <th className="right">Change</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="font-semi text-muted" colSpan="4">EQUITY</td></tr>
              {data.liabilities.equity.map((item, idx) => (
                <tr key={idx} className={item.highlight ? 'highlight' : ''}>
                  <td className={item.class || ''}>{item.name}</td>
                  <td className={`right ${item.fy25Color || ''}`}>{item.fy25}</td>
                  <td className={`right ${item.fy24Color || ''}`}>{item.fy24}</td>
                  <td className={`right ${item.changeColor}`}>{item.change}</td>
                </tr>
              ))}
              <tr className="subtotal">
                <td>Total Shareholders' Funds</td>
                <td className="right text-orange">71,837</td>
                <td className="right">1,07,897</td>
                <td className="right text-red">-33.4%</td>
              </tr>
              
              <tr><td className="font-semi text-muted" colSpan="4">NON-CURRENT LIABILITIES</td></tr>
              {data.liabilities.nonCurrent.map((item, idx) => (
                <tr key={idx} className={item.highlight ? 'highlight' : ''}>
                  <td>{item.name}</td>
                  <td className={`right ${item.fy25Color || ''}`}>{item.fy25}</td>
                  <td className="right">{item.fy24}</td>
                  <td className={`right ${item.changeColor}`}>{item.change}</td>
                </tr>
              ))}
              <tr className="subtotal">
                <td>Total Non-Current Liabilities</td>
                <td className="right">4,673</td>
                <td className="right">756</td>
                <td className="right text-red">+518%</td>
              </tr>
              
              <tr><td className="font-semi text-muted" colSpan="4">CURRENT LIABILITIES</td></tr>
              {data.liabilities.current.map((item, idx) => (
                <tr key={idx} className={item.highlight ? 'highlight' : ''}>
                  <td className={item.class || ''}>{item.name}</td>
                  <td className={`right ${item.fy25Color || ''}`}>{item.fy25}</td>
                  <td className={`right ${item.fy24Color || ''}`}>{item.fy24}</td>
                  <td className={`right ${item.changeColor}`}>{item.change}</td>
                </tr>
              ))}
              <tr className="subtotal">
                <td>Total Current Liabilities</td>
                <td className="right text-red">1,63,565</td>
                <td className="right">1,13,985</td>
                <td className="right text-red">+43%</td>
              </tr>
              
              <tr className="total">
                <td>TOTAL EQUITY & LIABILITIES</td>
                <td className="right">2,37,370</td>
                <td className="right">2,22,935</td>
                <td className="right">+6.5%</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
};

export default BalanceSheet;
