import { useState } from "react";

const RegisterForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <input
        className="auth-input"
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        className="auth-input"
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        className="auth-input"
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button className="auth-button" type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;