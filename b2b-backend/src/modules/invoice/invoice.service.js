import {
  createInvoice,
  getInvoiceByOrder,
  getInvoices,
} from "./invoice.repository.js";

import * as orderRepository from "../order/order.repository.js";
import { generateInvoiceNumber } from "./invoice.utils.js";

export const generateInvoice = async (orderId) => {
  const order = await orderRepository.getOrderById(orderId);

  if (!order) throw new Error("Order not found");

  const existing = await getInvoiceByOrder(orderId);
  if (existing) return existing;

  const invoiceNumber = generateInvoiceNumber();

  return await createInvoice({
    orderId,
    userId: order.userId,
    companyId: order.companyId,
    amount: order.totalAmount,
    invoiceNumber,
  });
};

export const fetchInvoices = async () => {
  return await getInvoices();
};