import { useState, useEffect } from 'react';
import { discountService } from '../services/discount-service';
import type { Discount } from '../types';

export const useDiscounts = () => {
  const [discounts, setDiscounts] = useState<Discount[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchDiscounts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await discountService.getDiscounts();
      setDiscounts(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch discounts'));
      setDiscounts([]); // Reset to empty array on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiscounts();
  }, []);

  return {
    discounts,
    loading,
    error,
    fetchDiscounts,
  };
};
