import "./styles/navbar.css";
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';


class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.setActiveLink = this.setActiveLink.bind(this);
        this.setScroll = this.setScroll.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.state = {
            scroll: false,
            activeLink: 'home',
            isOpen: false
        };
    }

    setActiveLink(link){ 
        this.setState({
            activeLink: link
        });
    }

    setScroll(state){
        this.setState({
            scroll: state
        });
    }

    onScroll(){
        if (window.scrollY > 50){
            this.setScroll(true);
        } else {
            this.setScroll(false);
        }
    }

    toggleNavbar(){
        let openState = !this.state.isOpen;
         this.setState({
            isOpen: openState
        });
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.onScroll);
    }

    render(){
        return(
            <div id="navigation">
              <Navbar className="nav navbar-dark" id={this.state.scroll ? "scrolled": ""}>
                <NavbarBrand id="brand" tag={Link} to="/">Isaac Perks <span className="fs-6">Software Developer</span></NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className={this.state.activeLink === 'home' ? 'active-link' : ""} onClick={()=>{this.setActiveLink('home')}} tag={Link} to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={this.state.activeLink === 'about' ? 'active-link' : ""} onClick={()=>{this.setActiveLink('about')}} tag={Link} to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={this.state.activeLink === 'portfolio' ? 'active-link' : ""} onClick={()=>{this.setActiveLink('portfolio')}} tag={Link} to="/portfolio">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={this.state.activeLink === 'blog' ? 'active-link' : ""} onClick={()=>{this.setActiveLink('blog')}} tag={Link} to="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={this.state.activeLink === 'resume' ? 'active-link' : ""} onClick={()=>{this.setActiveLink('resume')}} tag={Link} to="/resume">Resume</NavLink>
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
