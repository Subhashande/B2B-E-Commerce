import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategories, setSelectedCategory } from "../productSlice";
import {
  selectProducts,
  selectCategories,
  selectSelectedCategory,
  selectLoading,
  selectError,
} from "../productSelectors";

import ProductHeader from "../components/ProductHeader";
import ProductGrid from "../components/ProductGrid";
import ProductSkeleton from "../components/ProductSkeleton";
import EmptyState from "../components/EmptyState";

const Home = () => {
  const dispatch = useDispatch();
  
  const products = useSelector(selectProducts) || [];
  const categories = useSelector(selectCategories) || [];
  const selectedCategory = useSelector(selectSelectedCategory);
  const loading = useSelector(selectLoading) || false;
  const error = useSelector(selectError) || null;

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <ProductHeader />

      {/* CATEGORY FILTER */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          onClick={() => handleCategoryChange(null)}
          style={{
            padding: "8px 16px",
            borderRadius: "20px",
            border: "1px solid #ddd",
            background: selectedCategory === null ? "#3b82f6" : "#fff",
            color: selectedCategory === null ? "#fff" : "#333",
            cursor: "pointer",
          }}
        >
          All
        </button>
        {Array.isArray(categories) && categories.map((cat) => (
          <button
            key={cat._id || cat.id || cat}
            onClick={() => handleCategoryChange(cat.name || cat)}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: "1px solid #ddd",
              background: selectedCategory === (cat.name || cat) ? "#3b82f6" : "#fff",
              color: selectedCategory === (cat.name || cat) ? "#fff" : "#333",
              cursor: "pointer",
            }}
          >
            {cat.name || cat}
          </button>
        ))}
      </div>

      {/* LOADING */}
      {loading && <ProductSkeleton />}

      {/* ERROR */}
      {error && (
        <div
          style={{
            padding: "20px",
            background: "#fee2e2",
            color: "#991b1b",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          ⚠️ Error loading products
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && products.length === 0 && <EmptyState />}

      {/* PRODUCT GRID */}
      {!loading && products.length > 0 && (
        <ProductGrid products={products} />
      )}
    </div>
  );
};

export default Home;