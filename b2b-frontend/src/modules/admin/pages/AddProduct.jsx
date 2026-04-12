import ProductForm from "../components/ProductForm";

const AddProduct = () => {
  const handleSubmit = (data) => {
    console.log("Add product:", data);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;