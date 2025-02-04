
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import Footer from "./Footer";

const FoodListing = lazy(() => import("./FoodListing"));
const Cart = lazy(() => import("./Cart"));
const Login = lazy(() => import("./Login"));
const Home = lazy(() => import("./Home"));


function AppWithRouting() {
  
  return (
    <BrowserRouter>
      <div class="container p-0" style={{"background-color": "#006D5B", "height": "100%"}}>
        <Header/>
        <Suspense fallback="Loading Component"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foodlisting" element={<FoodListing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          </Suspense>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default AppWithRouting;