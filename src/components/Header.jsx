import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import './Header.css';

const Header = ({ title }) => {
  return (
    <header className="page-header glass-panel">
      <h1 className="page-title">{title}</h1>
      
      <div className="header-actions">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        
        <button className="icon-btn">
          <Bell size={20} />
          <span className="badge-dot"></span>
        </button>
        
        <div className="user-profile">
          <div className="avatar">
            <User size={20} />
          </div>
          <span className="user-name">Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
