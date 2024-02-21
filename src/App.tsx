import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
