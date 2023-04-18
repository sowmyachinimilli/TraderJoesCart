import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
         <Routes>
          <Route path='/login' Component={LoginPage} />
          <Route path='/register' Component={RegisterPage} />
          <Route path='/profile' Component={ProfilePage} />
            <Route path='/product/:id' Component={ProductPage} />
            <Route path='/cart/:id?' Component={CartPage} />
            <Route path='/' Component={HomePage} exact />
            </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
