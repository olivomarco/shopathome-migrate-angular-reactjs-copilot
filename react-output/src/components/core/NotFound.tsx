import React from 'react';

export const NotFound: React.FC = () => {
  return (
    <div className="content-container">
      <div className="content-title-group not-found">
        <i className="fas fa-exclamation-triangle" aria-hidden="true"></i> &nbsp;
        <span className="title">These aren't the bits you're looking for</span>
      </div>
    </div>
  );
};
