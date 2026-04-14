
import * as invoiceService from "./invoice.service.js";

export const createInvoice = async (req, res, next) => {
  try {
    const result = await invoiceService.generateInvoice(
      req.params.orderId
    );
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const getInvoices = async (req, res, next) => {
  try {
    const invoices = await invoiceService.fetchInvoices();
    res.json({ success: true, invoices });
  } catch (err) {
    next(err);
  }
};