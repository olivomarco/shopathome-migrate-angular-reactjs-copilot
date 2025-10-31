import { Link } from 'react-router-dom';

interface ListHeaderProps {
  title: string;
  showAdd?: boolean;
  onAdd?: () => void;
  onRefresh?: () => void;
}

export const ListHeader = ({ 
  title, 
  showAdd = true, 
  onAdd, 
  onRefresh 
}: ListHeaderProps) => {
  return (
    <div className="content-title-group">
      <Link to="/">
        <h2 className="title">{title}</h2>
      </Link>
      {showAdd && (
        <button
          className="button add-button"
          onClick={onAdd}
          aria-label="add"
        >
          <i className="fas fa-plus" aria-hidden="true"></i>
        </button>
      )}
      <button
        className="button refresh-button"
        onClick={onRefresh}
        aria-label="refresh"
      >
        <i className="fas fa-sync" aria-hidden="true"></i>
      </button>
    </div>
  );
};
