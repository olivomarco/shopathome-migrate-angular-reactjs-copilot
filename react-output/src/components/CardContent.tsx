interface CardContentProps {
  name: string;
  description: string;
}

export const CardContent = ({ name, description }: CardContentProps) => {
  return (
    <div className="card-content">
      <div className="content">
        <div className="name">{name}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};
