import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Router>
    <Header/>
    <main className='py-3'>
      <Container>
        <Routes>
        <Route path='/' Component={HomePage} exact />
        <Route path='/product/:id' Component={ProductPage} />
        </Routes>
      </Container>
    </main>
    <Footer/> 
    </Router>
  );
};

export default App;
