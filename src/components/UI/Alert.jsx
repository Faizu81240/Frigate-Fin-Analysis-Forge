import React from 'react';

const Alert = ({ type, icon, title, children }) => {
  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-icon">{icon}</div>
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Alert;
