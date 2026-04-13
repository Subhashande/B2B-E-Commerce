
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