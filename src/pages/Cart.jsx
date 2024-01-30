import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Cart() {
 

  const cartItems = useSelector((state) => state.cartlistReducer)
  let totalPrice=0
  cartItems?.forEach(element => {
    totalPrice=totalPrice+element.price
    
  });
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleCheckout=()=>{
    alert('Succefully Placed the Order')
    dispatch(emptyCart())
    navigate('/')
    
  }

  return (
    <>
      <button style={{ marginTop: '150px' }} className='btn btn-success ms-5'>

        <Link to={'/'} style={{ textDecoration: "none", color: "white" }}><i class="fa-solid fa-arrow-left me-2"></i>

          Back To Home</Link>

      </button>
      <div className='row w-100'>
        
          


            <div className='col-lg-6 col-md-6 m-5'>

              <table className='table shadow border'>

                <thead>

                  <tr>

                    <th>#</th>

                    <th>Product</th>

                    <th>Image</th>

                    <th>Price</th>

                    <th>Actions</th>

                  </tr>

                </thead>
                <tbody>
                  {
                    cartItems.length>0?
                    cartItems?.map((item, index) => (
                      <tr>

                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td><img height={'50px'} width={'50px'} src={item.thumbnail} alt="" /></td>
                        <td>&#8377;{item.price}</td>
                        <td>
                          <Button variant='btn btn-outline-danger' onClick={() => dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash" ></i></Button>

                        </td>
                      </tr>
                    )):
                  <p className='text-danger'>No items in cart</p>
                  }
                </tbody>
              </table>
            </div> 
            <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center">
            <div className="border shadow p-5">
              <h3 className="text-primary">Cart Summary</h3>
              <h5>Total no.of Products : <span className='fw-bolder text-warning ms-2'>{ cartItems.length}</span></h5>
              <h5>Total price : <span  className='fw-bolder text-warning ms-2'>{totalPrice}</span ></h5>
              <button className='btn btn-success rounded w-100 mt-3' onClick={handleCheckout}>Check Out</button>
            </div>
          </div>
  
        </div>

    </>
      )
}

      export default Cart