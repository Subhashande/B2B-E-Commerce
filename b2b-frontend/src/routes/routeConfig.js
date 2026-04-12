import Home from "../modules/product/pages/Home";
import Login from "../modules/auth/pages/Login";
import Register from "../modules/auth/pages/Register";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];