import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {
  //to access data inside store:use selector hook
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  const cartlistArray=useSelector((state)=>state.cartlistReducer)
  console.log("================cart");

console.log(cartlistArray);
  return (
   <>
    <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100 "style={{zIndex:"1"}}>
      
      <Container>
        <Link to={'/'}>
        <Navbar.Brand href="#home">
          <img  height={'40px'}
          className='me-3 rounded'
          src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" alt="" />
        Ekart
      
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          
            <Nav.Link  className='btn border rounded me-3 '  style={{backgroundColor:'black'}} href="#home">  <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist <Badge className=' p-2' style={{color:'white'}} > {wishlistArray.length}</Badge>   </Link></Nav.Link>
         
           
            <Nav.Link  className='btn border rounded' style={{width:"85px",backgroundColor:'white'}}  href="#cart"> <Link to={'/cart'} style={{textDecoration:'none',color:'black'}}> Cart <Badge bg="primary" className='p-2 ' style={{color:'black'}}> {cartlistArray?.length}</Badge ></Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header