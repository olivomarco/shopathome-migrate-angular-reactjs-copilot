import React, { useState, useEffect } from 'react';
import { ProductList, ProductDetail } from '../components/products';
import { ListHeader, Modal } from '../components/shared';
import { useProducts } from '../hooks/use-products';
import type { Product } from '../types';

export const Products: React.FC = () => {
  const { products, loading, error, addProduct, updateProduct, deleteProduct, fetchProducts } =
    useProducts();
  const [selected, setSelected] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('?');
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const sorted = [...products].sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setSortedProducts(sorted);
  }, [products]);

  const handleAdd = () => {
    setSelected({
      id: 0,
      name: '',
      description: '',
      quantity: 1,
    });
  };

  const handleSelect = (product: Product) => {
    setSelected(product);
  };

  const handleUnselect = () => {
    setSelected(null);
  };

  const handleSave = async (product: Product) => {
    try {
      if (selected && selected.id) {
        await updateProduct(product);
      } else {
        await addProduct(product);
      }
      setSelected(null);
    } catch (err) {
      console.error('Failed to save product', err);
    }
  };

  const askToDelete = (product: Product) => {
    setProductToDelete(product);
    setShowModal(true);
    setMessage(`Would you like to delete ${product.name}?`);
  };

  const handleDeleteConfirm = async () => {
    if (productToDelete) {
      try {
        await deleteProduct(productToDelete);
        setProductToDelete(null);
        setShowModal(false);
        setSelected(null);
      } catch (err) {
        console.error('Failed to delete product', err);
      }
    }
  };

  const handleDeleteCancel = () => {
    setShowModal(false);
    setProductToDelete(null);
  };

  return (
    <div className="content-container">
      <ListHeader title="My List" onAdd={handleAdd} onRefresh={fetchProducts} />
      {error && <div>{error.message}</div>}
      {loading && !sortedProducts.length && <div>Loading data ...</div>}

      <div className="columns is-multiline is-variable">
        <div className="column is-8">
          {!selected && (
            <ProductList
              products={sortedProducts}
              onSelect={handleSelect}
              onDelete={askToDelete}
            />
          )}
          {selected && (
            <ProductDetail product={selected} onUnselect={handleUnselect} onSave={handleSave} />
          )}
        </div>
      </div>

      <Modal
        message={message}
        isOpen={showModal}
        onNo={handleDeleteCancel}
        onYes={handleDeleteConfirm}
      />
    </div>
  );
};
