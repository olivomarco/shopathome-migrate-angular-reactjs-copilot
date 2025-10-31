interface ButtonFooterProps {
  label: string;
  className: string;
  iconClasses: string;
  item: any;
  onClick: (item: any) => void;
}

export const ButtonFooter = ({
  label,
  className,
  iconClasses,
  item,
  onClick,
}: ButtonFooterProps) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <button
      className={`link ${className}`}
      aria-label={label}
      tabIndex={0}
      data-id={item.id}
      onClick={handleClick}
    >
      <i className={iconClasses}></i> <span>{label}</span>
    </button>
  );
};
