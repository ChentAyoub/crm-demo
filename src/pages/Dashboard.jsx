import React from 'react';
import Header from '../components/Header';
import MetricCard from '../components/MetricCard';
import DataTable from '../components/DataTable';
import { kpiData, recentComplaints } from '../data/mockData';
import './Dashboard.css';

const Dashboard = () => {
  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Customer', accessor: 'customerName' },
    { header: 'Issue', accessor: 'issue' },
    { 
      header: 'Priority', 
      accessor: 'priority',
      render: (row) => (
        <span className={`badge badge-${row.priority === 'High' ? 'danger' : row.priority === 'Medium' ? 'warning' : 'success'}`}>
          {row.priority}
        </span>
      )
    },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (row) => (
        <span style={{ fontWeight: 600, color: row.status === 'Open' ? 'var(--warning)' : 'var(--success)' }}>
          {row.status}
        </span>
      )
    }
  ];

  return (
    <div className="page-container">
      <Header title="Overview Dashboard" />
      
      <div className="metrics-grid">
        <MetricCard 
          title={kpiData.csat.label} 
          value={`${kpiData.csat.value}%`} 
          trend={kpiData.csat.trend} 
          isPositive={true} 
        />
        <MetricCard 
          title={kpiData.nps.label} 
          value={kpiData.nps.value} 
          trend={kpiData.nps.trend} 
          isPositive={true} 
        />
        <MetricCard 
          title={kpiData.ces.label} 
          value={kpiData.ces.value} 
          trend={kpiData.ces.trend} 
          isPositive={true} 
        />
        <MetricCard 
          title={kpiData.claimRate.label} 
          value={`${kpiData.claimRate.value}%`} 
          trend={kpiData.claimRate.trend} 
          isPositive={true} 
        />
        <MetricCard 
          title={kpiData.responseTime.label} 
          value={kpiData.responseTime.value} 
          trend={kpiData.responseTime.trend} 
          isPositive={true} 
        />
      </div>

      <div className="recent-section animate-slide-in" style={{ animationDelay: '0.1s' }}>
        <h2 className="section-title">Recent Complaints (Action Required)</h2>
        <DataTable columns={columns} data={recentComplaints.slice(0, 3)} />
      </div>
    </div>
  );
};

export default Dashboard;
