import React from 'react';
import Header from '../components/Header';
import DataTable from '../components/DataTable';
import { recentComplaints } from '../data/mockData';

const Complaints = () => {
  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Date', accessor: 'date' },
    { header: 'Customer', accessor: 'customerName' },
    { header: 'Department', accessor: 'department' },
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
    },
    {
      header: 'Action',
      accessor: 'action',
      render: (row) => (
        <button 
          style={{
            padding: '6px 12px',
            backgroundColor: 'var(--brand-primary)',
            color: 'white',
            borderRadius: '4px',
            fontWeight: 500,
            fontSize: '0.75rem'
          }}
        >
          {row.status === 'Open' ? 'Resolve' : 'View'}
        </button>
      )
    }
  ];

  return (
    <div className="page-container">
      <Header title="Complaints Management" />
      <div className="animate-slide-in">
        <DataTable columns={columns} data={recentComplaints} />
      </div>
    </div>
  );
};

export default Complaints;
