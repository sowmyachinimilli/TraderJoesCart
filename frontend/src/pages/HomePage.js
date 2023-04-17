import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { listProducts } from '../actions/ProductActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => {
    console.log(state.productList);
    return state.productList;
  });

  const { loading, error, products } = productList;
  //console.log(products);

  useEffect(() => {
    console.log('Dispatching listProducts action');
    dispatch(listProducts());
  }, [dispatch]);

  //const products = [];

  return (
    <>
      <h1>Latest products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomePage;
