import apiClient from './api-client';
import type { Product } from '../types';

export const productService = {
  async getProducts(): Promise<Product[]> {
    const response = await apiClient.get<Product[]>('/products');
    return response.data;
  },

  async getProduct(id: number): Promise<Product> {
    const response = await apiClient.get<Product>(`/products/${id}`);
    return response.data;
  },

  async updateProduct(product: Product): Promise<Product> {
    const response = await apiClient.put<Product>(`/products/${product.id}`, product);
    return response.data;
  },

  async deleteProduct(product: Product): Promise<void> {
    await apiClient.delete(`/products/${product.id}`);
  },

  async addProduct(product: Product): Promise<Product> {
    const response = await apiClient.post<Product>('/products', product);
    return response.data;
  },
};
