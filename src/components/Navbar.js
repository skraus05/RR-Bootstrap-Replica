import { Nav, Navbar, Button, NavbarCollapse } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
    return (
        <Navbar bg='light' expand='lg'>
    <Navbar.Brand style={{margin: '5px 0 0 20px'}} href='#home'>
        <img src='instacart-logo.png'/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
    <NavbarCollapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
        </Nav>
        <Nav>
            <Nav.Link href='#LogIn'>Log In</Nav.Link>
            <Button variant='success'>Sign Up</Button>{''}
        </Nav>
    </NavbarCollapse>
</Navbar>
    )
}
export default Navbar()

