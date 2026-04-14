import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../adminSlice";
import StatsCard from "../components/StatsCard";
import RevenueChart from "../components/RevenueChart";
import OrdersChart from "../components/OrdersChart";
import RecentOrders from "../components/RecentOrders";
import Loader from "../../../components/common/Loader";

const Analytics = () => {
  const dispatch = useDispatch();
  const { stats, loading } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  if (loading && !stats.totalOrders) {
    return <Loader />;
  }

  // Extract data from API response or use defaults
  const displayStats = {
    revenue: stats.totalRevenue || 0,
    orders: stats.totalOrders || 0,
    users: stats.totalUsers || 0,
  };

  const chartData = stats.chartData || [
    { name: "Jan", revenue: 0, orders: 0 },
  ];

  const recentOrders = stats.recentOrders || [];

  return (
    <div>
      <h1 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "20px" }}>
        Business Analytics
      </h1>

      {/* STATS */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <StatsCard title="Revenue" value={`₹${displayStats.revenue}`} color="#3b82f6" />
        <StatsCard title="Orders" value={displayStats.orders} color="#10b981" />
        <StatsCard title="Users" value={displayStats.users} color="#f59e0b" />
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