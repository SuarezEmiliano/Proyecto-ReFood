import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/pages/Home'
import HomeRestaurant from "./components/pages/HomeRestaurant";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/restaurant" element={<HomeRestaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}