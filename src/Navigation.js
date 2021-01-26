import { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render(){

    const user = this.props.user;

    return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand has={Link} to='/'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Item>
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
        </Nav.Item>
        {user === null &&
        <Nav.Item className="ml-auto">
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav.Item>}
        {user === null &&
        <Nav.Item>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
        </Nav.Item>}
        {user !== null &&
        <Nav.Item className="ml-auto">
          <Nav.Link as={Link} to="/">Logout</Nav.Link>
        </Nav.Item>}

      </Navbar.Collapse>
    </Navbar>
    );
  }
}
  

export default Navigation;
