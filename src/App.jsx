import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/pages/Home'
import HomeRestaurant from "./components/pages/HomeRestaurant";
import OrderPage from "./components/pages/OrderPage";
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
          <Route path="/menu" element={<RestaurantMenu />} />
          <Route path="/encuestas" element={<ResultadosEncuestas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}