import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function Charts({ transactions }) {

  // 📊 Category Data
  const categoryData = Object.values(
    transactions.reduce((acc, t) => {
      acc[t.category] = acc[t.category] || { name: t.category, value: 0 };
      acc[t.category].value += t.amount;
      return acc;
    }, {})
  );

  return (
    <div className="charts">

      {/* 🥧 Pie Chart Card */}
      <div className="chart-card">
        <h3>Category Distribution</h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {categoryData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 📈 Line Chart Card */}
      <div className="chart-card">
        <h3>Transaction Trend</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={transactions}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="amount"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}