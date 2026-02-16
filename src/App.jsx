import React from 'react';
import './App.css';
import Cover from './components/Cover';
import ExecutiveSummary from './components/ExecutiveSummary';
import RevenueAnalysis from './components/RevenueAnalysis';
import FinancialRatios from './components/FinancialRatios';
import BalanceSheet from './components/BalanceSheet';
import ExpenseAnalysis from './components/ExpenseAnalysis';
import CriticalFlaws from './components/CriticalFlaws';
import FinancialScorecard from './components/FinancialScorecard';
import StrategicAdvisory from './components/StrategicAdvisory';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';
import financialData from './data/financialData.json';

function App() {
  return (
    <div className="App">
      <Cover data={financialData.cover} />
      <div className="container">
        <ExecutiveSummary data={financialData.executiveSummary} />
        <RevenueAnalysis data={financialData.revenueAnalysis} />
        <FinancialRatios data={financialData.financialRatios} />
        <BalanceSheet data={financialData.balanceSheet} />
        <ExpenseAnalysis data={financialData.expenseAnalysis} />
        <CriticalFlaws data={financialData.criticalFlaws} />
        <FinancialScorecard data={financialData.scorecard} />
        <StrategicAdvisory data={financialData.strategicAdvisory} />
        <Conclusion data={financialData.conclusion} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
