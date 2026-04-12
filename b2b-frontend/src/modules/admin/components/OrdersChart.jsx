import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const OrdersChart = ({ data }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h3>Orders Overview</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="orders" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersChart;