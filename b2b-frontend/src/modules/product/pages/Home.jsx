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

  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div style={{ padding: "30px" }}>
      <ProductHeader />

      {loading && <ProductSkeleton />}
      {error && <p>Error loading products</p>}

      {!loading && products.length === 0 && <EmptyState />}
      {!loading && products.length > 0 && (
        <ProductGrid products={products} />
      )}
    </div>
  );
};

export default Home;