import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Register from "./pages/Register";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store.tsx";
import ShowProducts from "./pages/ShowProducts.tsx";

function App() {
  const { user } = useSelector((state: RootState) => state.rootReducer.user);
  const { products } = useSelector(
    (state: RootState) => state.rootReducer.products
  );

  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Routes>
        <Route
          path="/register"
          element={user ? <Navigate to={"/"} /> : <Register />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/"
          element={user ? <AddProduct /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/showproduct"
          element={
            products.length > 0 ? <ShowProducts /> : <Navigate to={"/"} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
