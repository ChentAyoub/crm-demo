import React from 'react';
import Header from '../components/Header';
import DataTable from '../components/DataTable';
import { customersList } from '../data/mockData';

const Customers = () => {
  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { 
      header: 'CSAT Score', 
      accessor: 'recentCsat',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '100%',
            height: '6px',
            backgroundColor: 'var(--bg-tertiary)',
            borderRadius: '4px',
            overflow: 'hidden',
            maxWidth: '100px'
          }}>
            <div style={{
              width: `${row.recentCsat}%`,
              height: '100%',
              backgroundColor: row.recentCsat >= 80 ? 'var(--success)' : row.recentCsat >= 50 ? 'var(--warning)' : 'var(--danger)'
            }} />
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{row.recentCsat}%</span>
        </div>
      )
    },
    { 
      header: 'Loyalty', 
      accessor: 'loyaltyStatus',
      render: (row) => {
        let color = row.loyaltyStatus === 'Gold' ? '#fbbf24' : row.loyaltyStatus === 'Silver' ? '#94a3b8' : '#d97706';
        return (
          <span style={{ color, fontWeight: 700 }}>{row.loyaltyStatus}</span>
        );
      }
    },
    { header: 'Total Purchases', accessor: 'totalPurchases' },
    { header: 'Last Interaction', accessor: 'lastInteraction' },
  ];

  return (
    <div className="page-container">
      <Header title="Customer Database" />
      <div className="animate-slide-in">
        <DataTable columns={columns} data={customersList} />
      </div>
    </div>
  );
};

export default Customers;
