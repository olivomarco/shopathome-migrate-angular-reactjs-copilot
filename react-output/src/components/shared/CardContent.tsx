import React from 'react';

interface CardContentProps {
  name: string;
  description: string;
}

export const CardContent: React.FC<CardContentProps> = ({ name, description }) => {
  return (
    <div className="card-content">
      <div className="content">
        <div className="name">{name}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};
