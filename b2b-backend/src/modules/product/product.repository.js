// MOCK PRODUCT STORAGE
const mockProducts = [
  {
    _id: "1",
    name: "MacBook Pro M2",
    price: 129999,
    description: "The next generation of Mac laptops. Performance to go.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000",
    stock: 50,
  },
  {
    _id: "2",
    name: "Dell XPS 13",
    price: 95000,
    description: "The most powerful XPS 13 in its class, reimagined.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000",
    stock: 30,
  },
  {
    _id: "3",
    name: "Sony WH-1000XM5",
    price: 29999,
    description: "Industry leading noise canceling headphones.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",
    stock: 100,
  },
  {
    _id: "4",
    name: "Logitech MX Master 3S",
    price: 9999,
    description: "The most advanced master series mouse ever.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1000",
    stock: 200,
  },
];

export const createProduct = async (data) => {
  const newProduct = {
    _id: (mockProducts.length + 1).toString(),
    ...data,
  };
  mockProducts.push(newProduct);
  return newProduct;
};

export const getProducts = async (filter = {}, options = {}) => {
  return mockProducts;
};

export const getProductById = async (id) =>
  mockProducts.find((p) => p._id === id);