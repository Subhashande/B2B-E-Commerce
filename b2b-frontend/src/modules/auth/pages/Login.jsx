import LoginForm from "../components/LoginForm";
import { useDispatch } from "react-redux";
import { login } from "../authSlice";
import "../../../assets/styles/auth.css";
import { loginUser } from "../../../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      // ✅ Dispatch thunk instead of manual API call
      const resultAction = await dispatch(login(data));

      if (login.fulfilled.match(resultAction)) {
        const { user } = resultAction.payload;
        
        // ✅ Redirect based on role
        if (user.role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        const error = resultAction.payload;
        alert(error?.message || "Login failed");
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
        <h1>B2B Commerce</h1>
        <p>
          Manage your business orders efficiently with our platform.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">
        <div className="auth-card">
          <h2 className="auth-title">Login</h2>

          {/* ✅ IMPORTANT */}
          <LoginForm onSubmit={handleLogin} />

          <div className="auth-footer">
            New here? <span onClick={() => navigate("/register")} style={{ cursor: "pointer", color: "#2874f0" }}>Register</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;