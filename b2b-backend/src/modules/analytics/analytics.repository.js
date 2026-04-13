// src/modules/analytics/analytics.repository.js

import Order from "../order/order.model.js";
import User from "../user/user.model.js";
import Company from "../company/company.model.js";
import Credit from "../credit/credit.model.js";

export const countOrders = () => Order.countDocuments();

export const totalRevenue = () =>
  Order.aggregate([
    {
      $group: {
        _id: null,
        total: { $sum: "$totalAmount" },
      },
    },
  ]);

export const countUsers = () => User.countDocuments();

export const countCompanies = () => Company.countDocuments();

export const creditStats = () =>
  Credit.aggregate([
    {
      $group: {
        _id: null,
        used: { $sum: "$usedCredit" },
        limit: { $sum: "$creditLimit" },
      },
    },
  ]);

export const monthlySales = () =>
  Order.aggregate([
    {
      $group: {
        _id: { $month: "$createdAt" },
        total: { $sum: "$totalAmount" },
      },
    },
    { $sort: { "_id": 1 } },
  ]);