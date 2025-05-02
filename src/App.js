import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

function Home() {
  return <h2>หน้าแรก</h2>;
}

function Products() {
  return <h2>สินค้า</h2>;
}

function Cart() {
  return <h2>ตะกร้า</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/">หน้าแรก</Link>
          <Link to="/products">สินค้า</Link>
          <Link to="/cart">ตะกร้า</Link>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
