import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../productSlice";
import {
  selectProducts,
  selectLoading,
  selectError,
} from "../productSelectors";

import ProductHeader from "../components/ProductHeader";
import ProductGrid from "../components/ProductGrid";
import ProductSkeleton from "../components/ProductSkeleton";
import EmptyState from "../components/EmptyState";

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // ✅ SAFE DEFAULTS (VERY IMPORTANT)
  const products = useSelector(selectProducts) || [];
  const loading = useSelector(selectLoading) || false;
  const error = useSelector(selectError) || null;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // NO REDIRECT OR HIDING FOR PUBLIC VIEWING

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