import { useState, useEffect } from 'react';
import type { Product } from '../types';
import { ButtonFooter } from '../components/ButtonFooter';

interface ProductDetailProps {
  product: Product | null;
  onSave: (product: Product) => void;
  onCancel: () => void;
}

export const ProductDetail = ({ product, onSave, onCancel }: ProductDetailProps) => {
  const [editingProduct, setEditingProduct] = useState<Product>({
    id: 0,
    name: '',
    description: '',
    quantity: 1,
  });

  const addMode = !product || !product.id;

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

  const handleSave = () => {
    onSave(editingProduct);
  };

  const handleChange = (field: keyof Product, value: string | number) => {
    setEditingProduct((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="card edit-detail">
      <header className="card-header">
        <p className="card-header-title">
          {editingProduct.name || 'New Product'}
          &nbsp;
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {!addMode && (
            <div className="field">
              <label className="label" htmlFor="id">
                id
              </label>
              <input
                name="id"
                className="input"
                type="text"
                value={editingProduct.id}
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
              onChange={(e) => handleChange('name', e.target.value)}
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
              onChange={(e) => handleChange('description', e.target.value)}
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
              onChange={(e) => handleChange('quantity', parseInt(e.target.value, 10))}
              placeholder="1"
            />
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <ButtonFooter
          className="card-footer-item cancel-button"
          iconClasses="fas fa-undo"
          onClick={onCancel}
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
