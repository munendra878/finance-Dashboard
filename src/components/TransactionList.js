
export default function TransactionList({
  transactions,
  role,
  setTransactions,
  search
}) {

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const addTransaction = () => {
    const newTx = {
      id: Date.now(),
      date: "2026-04-05",
      amount: 1000,
      category: "Misc",
      type: "expense"
    };
    setTransactions([...transactions, newTx]);
  };

  return (
    <div>
      <h2>Transactions</h2>

      {role === "admin" && (
        <button onClick={addTransaction}>Add Transaction</button>
      )}

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}