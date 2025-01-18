import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop";
import Dashboard from "./pages/dashboard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { find } from "./store/features/productApiSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(find());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
