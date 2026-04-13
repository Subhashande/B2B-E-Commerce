import ProductForm from "../components/ProductForm";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from "../../../services/apiClient";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await apiClient.get(`/v1/products/${id}`);
        setProduct(res.data.product);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (data) => {
    try {
      await apiClient.patch(`/v1/products/${id}`, data);
      alert("Product updated successfully!");
      navigate("/admin/products");
    } catch (err) {
      console.error(err);
      alert("Failed to update product");
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Edit Product</h2>
      <ProductForm onSubmit={handleSubmit} initialData={product} />
    </div>
  );
};

export default EditProduct;