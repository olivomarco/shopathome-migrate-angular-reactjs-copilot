import { apiClient } from './api-client';
import type { Product } from '../types';

export const productService = {
  getProducts: () => apiClient.get<Product[]>('/products'),

  getProduct: (id: number) => apiClient.get<Product>(`/products/${id}`),

  addProduct: (product: Product) => apiClient.post<Product>('/products', product),

  updateProduct: (product: Product) =>
    apiClient.put<Product>(`/products/${product.id}`, product),

  deleteProduct: (product: Product) => apiClient.delete<void>(`/products/${product.id}`),
};
