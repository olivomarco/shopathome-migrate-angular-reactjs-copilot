import type { Product } from '../types';
import { CardContent } from '../components/CardContent';
import { ButtonFooter } from '../components/ButtonFooter';

interface ProductListProps {
  products: Product[];
  onSelect: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export const ProductList = ({ products, onSelect, onDelete }: ProductListProps) => {
  return (
    <ul className="list">
      {products.map((product) => (
        <li key={product.id} role="presentation">
          <div className="card">
            <CardContent name={product.name} description={product.description} />
            <footer className="card-footer">
              <ButtonFooter
                className="card-footer-item delete-item"
                iconClasses="fas fa-trash"
                onClick={onDelete}
                label="Delete"
                item={product}
              />
              <ButtonFooter
                className="card-footer-item edit-item"
                iconClasses="fas fa-edit"
                onClick={onSelect}
                label="Edit"
                item={product}
              />
            </footer>
          </div>
        </li>
      ))}
    </ul>
  );
};
