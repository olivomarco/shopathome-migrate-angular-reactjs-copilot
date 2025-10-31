import React from 'react';
import { ButtonFooter, CardContent } from '../shared';
import type { Product } from '../../types';

interface ProductListProps {
  products: Product[];
  onDelete: (product: Product) => void;
  onSelect: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, onDelete, onSelect }) => {
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
                onClick={(item) => onDelete(item as Product)}
                label="Delete"
                item={product}
              />
              <ButtonFooter
                className="card-footer-item edit-item"
                iconClasses="fas fa-edit"
                onClick={(item) => onSelect(item as Product)}
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
