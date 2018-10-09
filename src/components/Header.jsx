import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from '@reach/router'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return ( 
        <div>
            <Navbar color="success faded" light>
            <NavbarBrand><Link to="/" className="mr-auto text-white">Galvanize Reads</Link></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2 text-white" />
            <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                <NavItem>
                    <NavLink><Link to='/authors' className="text-white">Authors</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to='/books' className="text-white">Books</Link></NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
    );
  }
}