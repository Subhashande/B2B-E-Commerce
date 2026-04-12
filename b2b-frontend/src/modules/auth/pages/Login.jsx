import LoginForm from "../components/LoginForm";
import { useDispatch } from "react-redux";
import { login } from "../authSlice";
import "../../../assets/styles/auth.css";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (data) => {
    dispatch(login(data));
  };

  return (
    <div className="auth-container">
      
      {/* LEFT SIDE */}
      <div className="auth-left">
        <h1>B2B Commerce</h1>
        <p>
          Manage your business orders efficiently with our platform.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">
        <div className="auth-card">
          <h2 className="auth-title">Login</h2>
          <LoginForm onSubmit={handleLogin} />
          <div className="auth-footer">
            New here? <span>Register</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;