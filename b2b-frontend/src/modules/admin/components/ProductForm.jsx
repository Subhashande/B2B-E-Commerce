import { useState } from "react";

const ProductForm = ({ onSubmit, initialData = {} }) => {
  const [form, setForm] = useState({
    name: initialData.name || "",
    price: initialData.price || "",
    description: initialData.description || "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px",
      }}
    >
      <input
        placeholder="Product Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Price"
        value={form.price}
        onChange={(e) =>
          setForm({ ...form, price: e.target.value })
        }
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <button type="submit">Save Product</button>
    </form>
  );
};

export default ProductForm;