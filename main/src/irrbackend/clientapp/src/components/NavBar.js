import "./styles/navbar.css";
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';


class NavBar extends React.Component{
    static displayName = NavBar.name;

    constructor(props){
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this)
        this.state = {
            collapsed: true
        }
    }

    toggleNavbar(){
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render(){
        return(
            <div id="navigation">
              <Navbar className="nav navbar-dark">
                <NavbarBrand id="brand"tag={Link} to="/">Isaac Perks <span className="fs-6">Software Developer</span></NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/portfolio">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/blog">Blog</NavLink>
                        </NavItem>
                        <LoginMenu>
                        </LoginMenu>
                    </Nav>
                </Collapse>
              </Navbar>
            </div>
        )
    }
}

export default NavBar
