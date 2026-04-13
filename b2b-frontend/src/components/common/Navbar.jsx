import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../modules/auth/authSlice";
import NotificationBell from "../../modules/notifications/components/NotificationBell";

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div
      style={{
        height: "60px",
        background: "#2874f0",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
      }}
    >
      {/* LOGO */}
      <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
        B2B Commerce
      </h2>

      {/* NAV LINKS */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>

        {token ? (
          <>
            {user?.role === "ADMIN" && (
              <Link to="/admin" style={{ color: "#fff", textDecoration: "none" }}>
                Admin
              </Link>
            )}
            <Link to="/orders" style={{ color: "#fff", textDecoration: "none" }}>
              Orders
            </Link>
            <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
              Cart ({items.length})
            </Link>
            <Link to="/credit" style={{ color: "#fff", textDecoration: "none" }}>
              Credit
            </Link>
            <Link to="/invoices" style={{ color: "#fff", textDecoration: "none" }}>
              Invoices
            </Link>
            <Link to="/shipping" style={{ color: "#fff", textDecoration: "none" }}>
              Shipping
            </Link>
            <NotificationBell />
            <button
              onClick={handleLogout}
              style={{
                background: "transparent",
                border: "1px solid #fff",
                color: "#fff",
                padding: "4px 8px",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>
              Login
            </Link>

            <Link to="/register" style={{ color: "#fff", textDecoration: "none" }}>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;