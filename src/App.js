// src/App.js
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import './App.css';

const App = () => {
  const firstName = "Samson"; 

  return (
    <Container className="mt-5">
      
      <div className="mt-3 greeting">
        {firstName ? <h2>Hello, {firstName}!</h2> : <h2>Hello, there!</h2>}
        {firstName && <img src="https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806967.jpg" alt="Profile" className="mt-2 profile-img" />}
      </div>
      <Card className="product-card">
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
