import React from 'react';

interface ListHeaderProps {
  title: string;
  showAdd?: boolean;
  onAdd?: () => void;
  onRefresh?: () => void;
}

export const ListHeader: React.FC<ListHeaderProps> = ({
  title,
  showAdd = true,
  onAdd,
  onRefresh,
}) => {
  return (
    <div className="content-title-group">
      <a href="/">
        <h2 className="title">{title}</h2>
      </a>
      {showAdd && onAdd && (
        <button className="button add-button" onClick={onAdd} aria-label="add">
          <i className="fas fa-plus" aria-hidden="true"></i>
        </button>
      )}
      {onRefresh && (
        <button className="button refresh-button" onClick={onRefresh} aria-label="refresh">
          <i className="fas fa-sync" aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
};
