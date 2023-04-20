import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
import { UserListPage } from './pages/UserListPage';
import UserEditPage from './pages/UserEditPage';
import ProductListPage from './pages/ProductListPage';
import ProductEditPage from './pages/ProductEditPage.js';
import OrderListPage from './pages/OrderListPage';
import SearchBox from './components/SearchBox';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/payment' Component={PaymentPage} />
            <Route path='/placeorder' Component={PlaceOrderPage} />
            <Route path='/shipping' Component={ShippingPage} />
            <Route path='/order/:id' Component={OrderPage} />
            <Route path='/login' Component={LoginPage} />
            <Route path='/register' Component={RegisterPage} />
            <Route path='/profile' Component={ProfilePage} />
            <Route path='/product/:id' Component={ProductPage} />
            <Route path='/cart/:id?' Component={CartPage} />
            <Route path='/admin/userlist' Component={UserListPage} />
            <Route path='/admin/user/:id/edit' Component={UserEditPage} />
            <Route path='/admin/productlist' Component={ProductListPage} />
            <Route path='/admin/product/:id/edit' Component={ProductEditPage} />
            <Route path='/admin/orderlist' Component={OrderListPage} />
            <Route path='/search/:keyword' Component={SearchBox} />
            <Route path='/' Component={HomePage} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
