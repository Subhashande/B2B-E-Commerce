import RegisterForm from "../components/RegisterForm";
import { useDispatch } from "react-redux";
import { register } from "../authSlice";
import "../../../assets/styles/auth.css";

const Register = () => {
  const dispatch = useDispatch();

  const handleRegister = (data) => {
    dispatch(register(data));
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
            Already have an account? <span>Login</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;