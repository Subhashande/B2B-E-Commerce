import {
  createInvoice,
  getInvoiceByOrder,
} from "./invoice.repository.js";

import Order from "../order/order.model.js";
import { generateInvoiceNumber } from "./invoice.utils.js";

export const generateInvoice = async (orderId) => {
  const order = await Order.findById(orderId);

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