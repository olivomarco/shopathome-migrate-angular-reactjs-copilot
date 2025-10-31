import React from 'react';
import { ListHeader } from '../components/shared';
import { useDiscounts } from '../hooks/use-discounts';

export const Discounts: React.FC = () => {
  const { discounts, loading, error, fetchDiscounts } = useDiscounts();

  return (
    <div className="container columns">
      <div className="column is-8">
        <ListHeader title="My Discounts" onRefresh={fetchDiscounts} showAdd={false} />
        {error && <div>{error.message}</div>}
        {loading && !discounts.length && <div>Loading data ...</div>}
        <ul className="list">
          {discounts.map((discount) => (
            <li key={discount.id} role="presentation">
              <div className="card">
                <div className="card-content">
                  <div className="content discount-grid">
                    <label>Store:</label>
                    <span>{discount.store}</span>
                    <label>Discount:</label>
                    <span>{discount.percentage}%</span>
                    <label>Code:</label>
                    <span>{discount.code}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
