import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Header() {
  return (
    <>
    <Navbar data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> <img className='br50' src="\static\images\logo2.png" alt="" height='80px' /></Navbar.Brand>
        <Navbar.Brand href="#home"><h2>WaterKen</h2> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-4">
            <Nav.Link className='tw fs2' href="#features">Home</Nav.Link>
            <Nav.Link className='tw fs2' href="#pricing">Products</Nav.Link>
            <Nav.Link className='tw fs2' href="#deets">About</Nav.Link>
            <Nav.Link className='tw fs2' href="#deets">Contact</Nav.Link>
            <Nav.Link className='tw fs2' href="#deets">Contact</Nav.Link>
          </Nav>
          <Nav>

            <Nav.Link eventKey={2} href="#memes">
            <div className="col-lg-4 col-sm-12 d-flex">
                {/* <span className='animate__animated animate__pulse name' > {centerName}  </span> */}
                <DropdownButton id="dropdown-basic-button" className='ms-3' style={{ zIndex: '10000' }} title="Login">
                  <Dropdown.Item >
                  <Link to="/adminlogin"><span className='tw'>Admin</span></Link>
                    {/* {
                      !isSuperAdminLogin ? <Link to="/superadminlogin"><span className='text-dark'>Super Admin</span></Link> :
                        <Link onClick={logoutSuperAdmin}><span className='text-dark'>Log out</span></Link>
                    } */}

                  </Dropdown.Item>
                  <Dropdown.Item ><Link to="/supplierlogin"><span className='tw'>Supplier</span></Link></Dropdown.Item>
                  <Dropdown.Item ><Link to="/customerlogin"><span className='tw'>Customer</span></Link></Dropdown.Item>
                  {/* {
                    !isAdminLogin ? <Dropdown.Item ><Link to="/adminlogin"><span className='text-dark'>Admin</span></Link></Dropdown.Item> :
                      <Link onClick={logoutAdmin}><span className='text-dark ms-3'>Log out</span></Link>
                  } */}
                </DropdownButton>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default Header;