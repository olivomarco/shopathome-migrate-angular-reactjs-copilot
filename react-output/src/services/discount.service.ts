import apiClient from './api-client';
import type { Discount } from '../types';

export const discountService = {
  async getDiscounts(): Promise<Discount[]> {
    const response = await apiClient.get<Discount[]>('/discounts');
    return response.data;
  },
};
