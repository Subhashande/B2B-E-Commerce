// src/modules/invoice/invoice.utils.js

export const generateInvoiceNumber = () => {
  return "INV-" + Date.now();
};

export const calculateGST = (amount) => {
  const gst = amount * 0.18;
  return {
    gst,
    total: amount + gst,
  };
};