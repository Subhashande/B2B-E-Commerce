import RegisterForm from "../components/RegisterForm";
import { useDispatch } from "react-redux";
import { register } from "../authSlice";
import "../../../assets/styles/auth.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      const resultAction = await dispatch(register(data));
      if (register.fulfilled.match(resultAction)) {
        alert("Registration successful! Waiting for admin approval.");
        navigate("/login");
      } else {
        const error = resultAction.payload;
        alert(error?.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("An unexpected error occurred");
    }
  };

  return (
    <div className="auth-container">

      {/* LEFT SIDE */}
      <div className="auth-left">
        <h1>Create Account</h1>
        <p>
          Join our B2B platform and start managing your orders.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">
        <div className="auth-card">
          <h2 className="auth-title">Register</h2>
          <RegisterForm onSubmit={handleRegister} />
          <div className="auth-footer">
            Already have an account? <span onClick={() => navigate("/login")} style={{ cursor: "pointer", color: "#2874f0" }}>Login</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;