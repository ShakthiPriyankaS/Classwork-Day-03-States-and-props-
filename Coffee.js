import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CoffeeSharpIcon from '@mui/icons-material/CoffeeSharp';
import EmojiFoodBeverageSharpIcon from '@mui/icons-material/EmojiFoodBeverageSharp';
function Coffee() {
  return (
    <div>
        <h1>Sips Cafe-Enjoy every sip of the Coffee</h1>
        <Navbar bg="secondary" variant="dark">
      <Container>
        <CoffeeSharpIcon/>
          <Navbar.Brand href="#home">Menu-Items</Navbar.Brand>
          <Nav className="me-auto">
             <Nav.Link href="https://www.swiggy.com/restaurants/the-south-indian-coffee-house-sathyamurthy-road-gandhipuram-coimbatore-58139">Coffee</Nav.Link>
            <Nav.Link href="https://www.swiggy.com/restaurants/tea-spot-aadhi-nagar-tambaram-chennai-407736">Tea</Nav.Link>
            <Nav.Link href="https://www.swiggy.com/restaurants/fb-cakes-peelamedu-coimbatore-202886">Pastries</Nav.Link>
            <EmojiFoodBeverageSharpIcon/>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Coffee