export default function Insights({ transactions }) {
  const categories = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categories[t.category] = (categories[t.category] || 0) + t.amount;
    }
  });

  const keys = Object.keys(categories);

  const highest = keys.length
    ? keys.reduce((a, b) =>
        categories[a] > categories[b] ? a : b
      )
    : null;

  const highestAmount = highest ? categories[highest] : 0;

  return (
    <div className="insights-card">

      <h2>📊 Insights</h2>

      {highest ? (
        <div className="insight-content">

          <div className="insight-box">
            <p className="label">Highest Spending</p>
            <h3>{highest}</h3>
            <p className="amount">₹ {highestAmount}</p>
          </div>

          <div className="tip-box">
            ⚡ Try reducing expenses in <b>{highest}</b> category
          </div>

        </div>
      ) : (
        <p className="no-data">No expense data available</p>
      )}
    </div>
  );
}