import { useState, useEffect } from 'react';
import type { Discount } from '../types';
import { discountService } from '../services/discount.service';

export const useDiscounts = () => {
  const [discounts, setDiscounts] = useState<Discount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDiscounts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await discountService.getDiscounts();
      setDiscounts(data);
    } catch (err) {
      setError('Unauthorized');
      console.error('Error fetching discounts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiscounts();
  }, []);

  return { discounts, loading, error, refetch: fetchDiscounts };
};
