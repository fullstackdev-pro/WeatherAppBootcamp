import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/components/Home";
import Auth from "./pages/Auth/Auth";
import { useEffect, useState } from "react";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const [check, setCheck] = useState(false);
  const isAuth = localStorage.getItem("weatherAppBootcamp");
  useEffect(() => {}, [isAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuth || check ? <Home /> : <Navigate to="/auth" />}
        />
        <Route path="/auth" element={<Auth setCheck={setCheck} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
