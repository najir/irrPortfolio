import "./styles/navbar.css";
import React from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import ClientRoutes from "../utils/ClientRoutes";
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
            <NavBar>
              <NavbarBrand tag={Link} to="/">IrrPortfolio</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                <ul className="navbar-nav flex-grow">
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/portfolio">Portfolio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/blog">Blog</NavLink>
                    </NavItem>
                    <LoginMenu>
                    </LoginMenu>
                </ul>
          </Collapse>
            </NavBar>
        )
    }
}

export default NavBar
