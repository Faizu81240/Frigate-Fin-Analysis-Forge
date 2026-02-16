import React from 'react';
import SectionHeader from './UI/SectionHeader';
import Card from './UI/Card';
import Alert from './UI/Alert';

const ExpenseAnalysis = ({ data }) => {
  return (
    <>
      <SectionHeader
        number="05"
        title="Expense Structure Deep Dive"
        subtitle="Root causes of loss — detailed expense analysis with cost escalation metrics"
      />

      <Card title="💸 Full Expense Breakdown — FY22 to FY25 (₹ Thousands)">
        <table className="data-table">
          <thead>
            <tr>
              <th>Expense Category</th>
              <th className="right">FY22</th>
              <th className="right">FY23</th>
              <th className="right">FY24</th>
              <th className="right">FY25</th>
              <th className="right">FY25 as % of Revenue</th>
              <th>Risk Level</th>
            </tr>
          </thead>
          <tbody>
            {data.expenses.map((expense, idx) => (
              <React.Fragment key={idx}>
                {expense.type === 'spacer' ? (
                  <tr><td colSpan="7" style={{height: '6px'}}></td></tr>
                ) : (
                  <tr className={expense.class || ''}>
                    <td className={expense.nameClass || ''}>{expense.name}</td>
                    <td className={`right ${expense.fy22Color || ''}`}>{expense.fy22}</td>
                    <td className={`right ${expense.fy23Color || ''}`}>{expense.fy23}</td>
                    <td className={`right ${expense.fy24Color || ''}`}>{expense.fy24}</td>
                    <td className={`right ${expense.fy25Color || ''}`}>{expense.fy25}</td>
                    <td className={`right ${expense.percentColor || ''}`}>{expense.percent}</td>
                    <td>{expense.riskPill ? <span className={`pill ${expense.riskPill}`}>{expense.risk}</span> : expense.risk}</td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </Card>

      <Card title="👥 Related Party Transactions — Director Compensation Analysis (FY24 Data)">
        <Alert 
          type="orange"
          icon="⚠️"
          title="Governance Alert: Total RPT Outflows ~₹53.4L in FY24 vs. Gross Profit of ₹3.62L"
        >
          Director salaries, consulting fees, and rental payments to promoter-related parties consumed resources significantly exceeding gross profit. This warrants an independent board-level RPT review committee.
        </Alert>
        
        <table className="data-table">
          <thead>
            <tr>
              <th>RPT Description</th>
              <th>Counterparty</th>
              <th className="right">FY23 (₹)</th>
              <th className="right">FY24 (₹)</th>
              <th>Nature</th>
            </tr>
          </thead>
          <tbody>
            {data.rptTransactions.map((rpt, idx) => (
              <tr key={idx} className={rpt.highlight ? 'highlight' : ''}>
                <td>{rpt.description}</td>
                <td>{rpt.party}</td>
                <td className="right">{rpt.fy23}</td>
                <td className={`right ${rpt.fy24Color || ''}`}>{rpt.fy24}</td>
                <td>{rpt.nature}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default ExpenseAnalysis;
