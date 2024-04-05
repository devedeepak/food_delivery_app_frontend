import { useState } from "react";
import { Route, Routes } from "react-router-dom"
import './App.css';
import Navbar from './components/header/Navbar.js';
import Footer from './components/Footer/Footer.js';
import { ErrorBoundary } from "react-error-boundary";
import Home from './pages/Home.js';
import Cart from './pages/Cart/Cart.js';
import LoginPopup from "./components/LoginPopup/LoginPopup.js";



function App() {
const[showLogin,setShowLogin] = useState(false)
  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      {showLogin? <LoginPopup  showLogin={showLogin} setShowLogin={setShowLogin}/>: ""}
      <div className="main-container">
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          
        </Routes>

      </div>
      <Footer />
    </ErrorBoundary>



    // <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>

    // <div className="main-container">

    //     <Navbar />
    //     <HeroSection />
    //     <ExploreMenu item={item} setItem={setItem}/>
    //     <Dishes item={item} setItem={setItem}/>


    // </div>
    // <Footer />
    // </ErrorBoundary>
  );
}

export default App;
