import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">ร้านค้าออนไลน์</h1>
      <div className="product-list">
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="สินค้า" />
          <h2>เสื้อยืดสีขาว</h2>
          <p>ราคา 250 บาท</p>
          <button>หยิบใส่ตะกร้า</button>
        </div>
      </div>
    </div>
  );
}

export default App;
