import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { listTopProducts } from '../actions/ProductActions';
import { useDispatch, useSelector } from 'react-redux';

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;
  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return (
    <>
      <h2>Top Rated Products</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Carousel pause='hover' className='bg-light'>
          {products.map((product) => (
            <Carousel.Item key={product._id}>
              <Link to={`/products/${product._id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fluid
                  style={{
                    display: 'block',
                    margin: '0 auto',
                    objectFit: 'none',
                  }}
                />
                {/* <Carousel.Caption className="='carousel-caption">
                  <h2>
                    {product.name} ({product.price})
                  </h2>
                </Carousel.Caption> */}
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default ProductCarousel;
