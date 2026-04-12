import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Login from "../modules/auth/pages/Login";
import Register from "../modules/auth/pages/Register";
import Home from "../modules/product/pages/Home";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC MAIN APP (WITH NAVBAR) */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        {/* AUTH PAGES (NO NAVBAR) */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />

        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;