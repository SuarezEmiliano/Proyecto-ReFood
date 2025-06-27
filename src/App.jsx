import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/pages/Home'
import HomeRestaurant from "./components/pages/HomeRestaurant";
import OrderPage from "./components/pages/OrderPage";
import OrderForm from "./components/pages/OrderForm";
import Order from "./components/pages/Order";
import RestaurantMenu from "./components/pages/RestaurantMenu";
import ResultadosEncuestas from "./components/pages/ResultadosEncuestas";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/restaurant" element={<HomeRestaurant />} />
          <Route path="/orderPage" element={<OrderPage />} />
          <Route path="/orderForm" element={<OrderForm />} />
          <Route path="/order" element={<Order />} />
          <Route path="/menu" element={<RestaurantMenu />} />
          <Route path="/encuestas" element={<ResultadosEncuestas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}