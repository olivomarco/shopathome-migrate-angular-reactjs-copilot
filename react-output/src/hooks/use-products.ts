import { useState, useEffect } from 'react';
import { productService } from '../services/product-service';
import type { Product } from '../types';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await productService.getProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch products'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async (product: Product) => {
    setLoading(true);
    setError(null);
    try {
      const newProduct = await productService.addProduct(product);
      setProducts([...products, newProduct]);
      return newProduct;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to add product'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (product: Product) => {
    setLoading(true);
    setError(null);
    try {
      const updatedProduct = await productService.updateProduct(product);
      setProducts(products.map((p) => (p.id === product.id ? updatedProduct : p)));
      return updatedProduct;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update product'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (product: Product) => {
    setLoading(true);
    setError(null);
    try {
      await productService.deleteProduct(product);
      setProducts(products.filter((p) => p.id !== product.id));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to delete product'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};

export const useProduct = (id: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await productService.getProduct(id);
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch product'));
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};
