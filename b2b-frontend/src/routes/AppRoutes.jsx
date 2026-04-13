import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Login from "../modules/auth/pages/Login";
import Register from "../modules/auth/pages/Register";
import Home from "../modules/product/pages/Home";
import ProductDetails from "../modules/product/pages/ProductDetails";
import Cart from "../modules/cart/pages/Cart";
import OrdersList from "../modules/user/pages/Orders";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../modules/admin/pages/AdminDashboard";
import Users from "../modules/admin/pages/Users";

import Products from "../modules/admin/pages/Products";
import AddProduct from "../modules/admin/pages/AddProduct";
import EditProduct from "../modules/admin/pages/EditProduct";

import Orders from "../modules/admin/pages/Orders";
import OrderDetails from "../modules/admin/pages/OrderDetails";
import Analytics from "../modules/admin/pages/Analytics";
import CreditDashboard from "../modules/credit/pages/CreditDashboard";
import InvoiceList from "../modules/invoice/pages/InvoiceList";
import Logistics from "../modules/logistics/pages/Logistics";
import PaymentPage from "../modules/payment/pages/PaymentPage";

import ProtectedRoute from "../components/common/ProtectedRoute";

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

        <Route
          path="/product/:id"
          element={
            <MainLayout>
              <ProductDetails />
            </MainLayout>
          }
        />

        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <MainLayout>
                <OrdersList />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/credit"
          element={
            <ProtectedRoute>
              <MainLayout>
                <CreditDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/invoices"
          element={
            <ProtectedRoute>
              <MainLayout>
                <InvoiceList />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/shipping"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Logistics />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment/:id"
          element={
            <ProtectedRoute>
              <MainLayout>
                <PaymentPage />
              </MainLayout>
            </ProtectedRoute>
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
                    <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
        path="/admin/users"
        element={
          <AdminLayout>
            <Users />
          </AdminLayout>
        }
      />

                <Route
            path="/admin/products"
            element={
              <AdminLayout>
                <Products />
              </AdminLayout>
            }
          />

          <Route
            path="/admin/products/add"
            element={
              <AdminLayout>
                <AddProduct />
              </AdminLayout>
            }
          />

          <Route
            path="/admin/products/edit/:id"
            element={
              <AdminLayout>
                <EditProduct />
              </AdminLayout>
            }
          />

                  <Route
          path="/admin/orders"
          element={
            <AdminLayout>
              <Orders />
            </AdminLayout>
          }
        />


        <Route
  path="/admin/orders/:id"
  element={
    <AdminLayout>
      <OrderDetails />
    </AdminLayout>
  }
/>

<Route
  path="/admin/analytics"
  element={
    <AdminLayout>
      <Analytics />
    </AdminLayout>
  }
/>

<Route
  path="/product/:id"
  element={
    <MainLayout>
      <ProductDetails />
    </MainLayout>
  }
/>
    </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;