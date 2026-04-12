import StatsCard from "../components/StatsCard";
import RevenueChart from "../components/RevenueChart";
import OrdersChart from "../components/OrdersChart";
import RecentOrders from "../components/RecentOrders";

const Analytics = () => {
  // MOCK DATA
  const stats = {
    revenue: 120000,
    orders: 320,
    users: 150,
  };

  const chartData = [
    { name: "Jan", revenue: 20000, orders: 50 },
    { name: "Feb", revenue: 30000, orders: 80 },
    { name: "Mar", revenue: 50000, orders: 120 },
  ];

  const recentOrders = [
    { _id: "ORD001", total: 50000 },
    { _id: "ORD002", total: 15000 },
  ];

  return (
    <div>
      <h1 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "20px" }}>
  Business Analytics
</h1>

      {/* STATS */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <StatsCard title="Revenue" value={`₹${stats.revenue}`} color="#3b82f6" />
        <StatsCard title="Orders" value={stats.orders} color="#10b981" />
        <StatsCard title="Users" value={stats.users} color="#f59e0b" />
      </div>

      {/* CHARTS */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div style={{ flex: 2 }}>
          <RevenueChart data={chartData} />
        </div>

        <div style={{ flex: 1 }}>
          <OrdersChart data={chartData} />
        </div>
      </div>

      {/* RECENT ORDERS */}
      <RecentOrders orders={recentOrders} />
    </div>
  );
};

export default Analytics;