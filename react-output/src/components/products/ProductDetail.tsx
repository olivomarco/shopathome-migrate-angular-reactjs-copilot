import React, { useState, useEffect } from 'react';
import { ButtonFooter } from '../shared';
import type { Product } from '../../types';

interface ProductDetailProps {
  product: Product;
  onUnselect: () => void;
  onSave: (product: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onUnselect, onSave }) => {
  const [editingProduct, setEditingProduct] = useState<Product>({
    id: 0,
    name: '',
    description: '',
    quantity: 1,
  });

  useEffect(() => {
    if (product && product.id) {
      setEditingProduct({ ...product });
    } else {
      setEditingProduct({
        id: 0,
        name: '',
        description: '',
        quantity: 1,
      });
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingProduct((prev) => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value, 10) : value,
    }));
  };

  const handleSave = () => {
    onSave(editingProduct);
  };

  return (
    <div className="card edit-detail">
      <header className="card-header">
        <p className="card-header-title">{editingProduct.name || 'New Product'} &nbsp;</p>
      </header>
      <div className="card-content">
        <div className="content">
          {editingProduct.id > 0 && (
            <div className="field">
              <label className="label" htmlFor="id">
                id
              </label>
              <input
                name="id"
                className="input"
                type="text"
                value={editingProduct.id}
                placeholder="e.g. ProductColleen"
                readOnly
              />
            </div>
          )}
          <div className="field">
            <label className="label" htmlFor="name">
              name
            </label>
            <input
              name="name"
              className="input"
              type="text"
              value={editingProduct.name}
              onChange={handleChange}
              placeholder="Oranges"
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="description">
              description
            </label>
            <input
              name="description"
              className="input"
              type="text"
              value={editingProduct.description}
              onChange={handleChange}
              placeholder="box"
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="quantity">
              quantity
            </label>
            <input
              name="quantity"
              className="input"
              type="number"
              min="1"
              max="100"
              value={editingProduct.quantity}
              onChange={handleChange}
              placeholder="1"
            />
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <ButtonFooter
          className="card-footer-item cancel-button"
          iconClasses="fas fa-undo"
          onClick={onUnselect}
          label="Cancel"
          item={editingProduct}
        />
        <ButtonFooter
          className="card-footer-item save-button"
          iconClasses="fas fa-save"
          onClick={handleSave}
          label="Save"
          item={editingProduct}
        />
      </footer>
    </div>
  );
};
