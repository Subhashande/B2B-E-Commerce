// src/modules/analytics/analytics.service.js

import Order from "../order/order.model.js";
import User from "../user/user.model.js";
import Company from "../company/company.model.js";
import Credit from "../credit/credit.model.js";

import { ORDER_STATUS } from "../../constants/orderStatus.js";

// 📊 DASHBOARD STATS
export const getDashboardStats = async () => {
  const totalOrders = await Order.countDocuments();

  const totalRevenueAgg = await Order.aggregate([
    { $match: { status: ORDER_STATUS.PROCESSING } },
    { $group: { _id: null, total: { $sum: "$totalAmount" } } },
  ]);

  const totalRevenue = totalRevenueAgg[0]?.total || 0;

  const totalUsers = await User.countDocuments();

  const totalCompanies = await Company.countDocuments();

  const creditAgg = await Credit.aggregate([
    {
      $group: {
        _id: null,
        used: { $sum: "$usedCredit" },
        limit: { $sum: "$creditLimit" },
      },
    },
  ]);

  return {
    totalOrders,
    totalRevenue,
    totalUsers,
    totalCompanies,
    totalCreditUsed: creditAgg[0]?.used || 0,
    totalCreditLimit: creditAgg[0]?.limit || 0,
  };
};

// 📈 MONTHLY SALES
export const getMonthlySales = async () => {
  const data = await Order.aggregate([
    {
      $group: {
        _id: { $month: "$createdAt" },
        total: { $sum: "$totalAmount" },
      },
    },
    { $sort: { "_id": 1 } },
  ]);

  return data;
};