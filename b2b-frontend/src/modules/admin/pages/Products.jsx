import { useEffect, useState } from "react";
import ProductTable from "../components/ProductTable";
import ProductRow from "../components/ProductRow";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // TEMP DATA (replace with API)
    setProducts([
      { _id: "1", name: "Laptop", price: 50000 },
      { _id: "2", name: "Printer", price: 15000 },
    ]);
  }, []);

  return (
    <div>

              <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h1>Product Management</h1>

          <button
            style={{
              background: "#10b981",
              color: "#fff",
              border: "none",
              padding: "10px 16px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            + Add Product
          </button>
        </div>

      <ProductTable>
        {products.map((p) => (
          <ProductRow key={p._id} product={p} />
        ))}
      </ProductTable>
    </div>
  );
};

export default Products;