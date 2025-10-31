import React from 'react';

interface ButtonFooterProps {
  label: string;
  className?: string;
  iconClasses?: string;
  item: unknown;
  dataId?: string | number;
  onClick: (item: unknown) => void;
}

export const ButtonFooter: React.FC<ButtonFooterProps> = ({
  label,
  className = '',
  iconClasses = '',
  item,
  dataId,
  onClick,
}) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <button
      className={`link ${className}`}
      aria-label={label}
      tabIndex={0}
      data-id={dataId || (item as { id?: string | number })?.id}
      onClick={handleClick}
    >
      {iconClasses && <i className={iconClasses}></i>} <span>{label}</span>
    </button>
  );
};
