import React, { useState } from "react";
import { transactions as data } from "./data/mockData";
import SummaryCards from "./components/SummaryCards";
import TransactionList from "./components/TransactionList";
import Charts from "./components/Charts";
import Insights from "./components/Insights";
import RoleSwitcher from "./components/RoleSwitcher";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState(data);
  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <h1>Finance Dashboard</h1>

      <RoleSwitcher role={role} setRole={setRole} />

      <SummaryCards transactions={transactions} />
      <Charts transactions={transactions} />


      <div className="search-container">
  <input
    className="search-input"
    placeholder="🔍 Search category..."
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

      <TransactionList
        transactions={transactions}
        role={role}
        setTransactions={setTransactions}
        search={search}
      />

      <Insights transactions={transactions} />
    </div>
  );
}

export default App;