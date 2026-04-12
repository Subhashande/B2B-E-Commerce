import ProductForm from "../components/ProductForm";

const EditProduct = () => {
  const handleSubmit = (data) => {
    console.log("Update product:", data);
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default EditProduct;