import { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <input
        className="auth-input"
        type="email"
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
        Login
      </button>
    </form>
  );
};

export default LoginForm;