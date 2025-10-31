import { apiClient } from './api-client';
import type { Discount } from '../types';

export const discountService = {
  getDiscounts: () => apiClient.get<Discount[]>('/discounts'),
};
