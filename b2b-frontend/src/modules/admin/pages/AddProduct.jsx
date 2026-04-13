import ProductForm from "../components/ProductForm";
import apiClient from "../../../services/apiClient";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await apiClient.post("/v1/products", data);
      alert("Product added successfully!");
      navigate("/admin/products");
    } catch (err) {
      console.error(err);
      alert("Failed to add product");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Add Product</h2>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;