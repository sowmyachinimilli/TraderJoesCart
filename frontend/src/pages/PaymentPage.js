import React, { useState } from 'react'
import { Form, Button, Row,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'
import { useNavigate, useLocation } from 'react-router-dom'
import { set } from 'mongoose'

const PaymentPage = () => {
const navigate = useNavigate()
const location = useLocation()

const cart = useSelector(state => state.cart)
const { shippingAddress } = cart

if(!shippingAddress) {
    navigate('/shipping')
}

const [paymentMethod, setPaymentMethod] = useState('PayPal')


const dispatch = useDispatch()

const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
}

return (
<FormContainer>
  <CheckoutSteps step1 step2 step3/>
    <h1>Payment Method</h1>
    <Form onSubmit={submitHandler}>
    <Form.Group>
        <Form.Label as='legend'>Select Method</Form.Label>
    </Form.Group>
    <Row>
    <Col>
        <Form.Check type='radio'
         label='PayPal or Credit Card'
          id='PayPal'
           name='paymentMethod' 
           value='PayPal'
        checked 
        onChange={(e) => setPaymentMethod(e.target.value)}>
        </Form.Check>

        {/* <Form.Check type='radio'
         label='Stripe' 
         id='Stripe' 
         name='paymentMethod' 
         value='Stripe'
        onChange={(e) => setPaymentMethod(e.target.value)}>
        </Form.Check>  */}
    </Col>
    </Row>

    <Button type='submit' variant='primary'>
      Continue
    </Button>
  </Form>
</FormContainer>
)
}

export default PaymentPage