// src/modules/invoice/invoice.repository.js

// MOCK INVOICE STORAGE
const mockInvoices = [
  {
    _id: "1",
    invoiceNumber: "INV-2024-001",
    orderId: "1",
    totalAmount: 129999,
    invoiceUrl: "https://example.com/invoice1.pdf",
    createdAt: new Date("2024-04-10"),
  },
  {
    _id: "2",
    invoiceNumber: "INV-2024-002",
    orderId: "2",
    totalAmount: 95000,
    invoiceUrl: "https://example.com/invoice2.pdf",
    createdAt: new Date("2024-04-12"),
  },
];

export const createInvoice = async (data) => {
  const newInvoice = {
    _id: (mockInvoices.length + 1).toString(),
    ...data,
    createdAt: new Date(),
  };
  mockInvoices.push(newInvoice);
  return newInvoice;
};

export const getInvoiceByOrder = async (orderId) =>
  mockInvoices.find((inv) => inv.orderId === orderId);

export const getInvoices = async () => mockInvoices;