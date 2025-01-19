import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop";
import Dashboard from "./pages/dashboard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { find } from "./store/features/productApiSlice";
import SingleProduct from "./pages/single-product/singleProduct";

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
        <Route path="/product/:productId" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
