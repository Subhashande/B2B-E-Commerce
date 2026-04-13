import ProductCard from "./ProductCard";

const ProductGrid = ({ products = [] }) => {
  // ✅ safety check
  if (!Array.isArray(products)) return null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "20px",
      }}
    >
      {products.map((p) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
};

export default ProductGrid;