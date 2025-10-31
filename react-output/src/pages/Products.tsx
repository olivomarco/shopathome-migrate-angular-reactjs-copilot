import { useState } from 'react';
import type { Product } from '../types';
import { useProducts } from '../hooks/useProducts';
import { ListHeader } from '../components/ListHeader';
import { ProductList } from '../components/ProductList';
import { ProductDetail } from '../components/ProductDetail';
import { Modal } from '../components/Modal';

export const Products = () => {
  const { products, loading, error, refetch, addProduct, updateProduct, deleteProduct } =
    useProducts();
  const [selected, setSelected] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);

  const message = productToDelete
    ? `Would you like to delete ${productToDelete.name}?`
    : '?';

  const handleAdd = () => {
    setSelected({} as Product);
  };

  const handleSelect = (product: Product) => {
    setSelected(product);
  };

  const handleClear = () => {
    setSelected(null);
  };

  const handleSave = async (product: Product) => {
    try {
      if (selected && selected.id) {
        await updateProduct(product);
      } else {
        await addProduct(product);
      }
      handleClear();
    } catch (err) {
      console.error('Error saving product:', err);
    }
  };

  const handleAskToDelete = (product: Product) => {
    setProductToDelete(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setProductToDelete(null);
  };

  const handleConfirmDelete = async () => {
    if (productToDelete) {
      try {
        await deleteProduct(productToDelete);
        handleCloseModal();
        handleClear();
      } catch (err) {
        console.error('Error deleting product:', err);
      }
    }
  };

  return (
    <div className="content-container">
      <ListHeader title="My List" onAdd={handleAdd} onRefresh={refetch} />
      {error && <div>{error}</div>}
      {!error && loading && <div>Loading data ...</div>}
      {!error && !loading && (
        <div className="columns is-multiline is-variable">
          <div className="column is-8">
            {!selected && (
              <ProductList
                products={products}
                onSelect={handleSelect}
                onDelete={handleAskToDelete}
              />
            )}
            {selected && (
              <ProductDetail
                product={selected}
                onSave={handleSave}
                onCancel={handleClear}
              />
            )}
          </div>
        </div>
      )}
      <Modal
        message={message}
        isOpen={showModal}
        onYes={handleConfirmDelete}
        onNo={handleCloseModal}
      />
    </div>
  );
};
