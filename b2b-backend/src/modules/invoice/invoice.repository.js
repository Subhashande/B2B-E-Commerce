import Invoice from "./invoice.model.js";

export const createInvoice = (data) => Invoice.create(data);

export const getInvoiceByOrder = (orderId) =>
  Invoice.findOne({ orderId });

export const getInvoices = () => Invoice.find();