import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProducts } from "../adminSlice";
import ProductTable from "../components/ProductTable";
import ProductRow from "../components/ProductRow";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.admin.products) || [];

  useEffect(() => {
    dispatch(getAdminProducts());
  }, [dispatch]);

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
          onClick={() => navigate("/admin/products/add")}
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
        {Array.isArray(products) && products.length > 0 ? (
          products.map((p) => (
            <ProductRow key={p._id} product={p} />
          ))
        ) : (
          <tr>
            <td colSpan="3" style={{ textAlign: "center", padding: "20px" }}>
              No products found
            </td>
          </tr>
        )}
      </ProductTable>
    </div>
  );
};

export default Products;