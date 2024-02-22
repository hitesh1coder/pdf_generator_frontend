import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Register from "./pages/Register";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
