import { ListHeader } from '../components/ListHeader';
import { useDiscounts } from '../hooks/useDiscounts';

export const Discounts = () => {
  const { discounts, loading, error, refetch } = useDiscounts();
  const showAdd = false;

  return (
    <div className="container columns">
      <div className="column is-8">
        <ListHeader
          title="My Discounts"
          showAdd={showAdd}
          onRefresh={refetch}
        />
        {error && <div>{error}</div>}
        {!error && loading && <div>Loading data ...</div>}
        {!error && !loading && discounts.length === 0 && <div>No discounts found</div>}
        {!error && !loading && discounts.length > 0 && (
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
        )}
      </div>
    </div>
  );
};
