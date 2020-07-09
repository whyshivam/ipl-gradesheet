import React, { Component } from 'react';
import {Nav, NavItem,NavLink,Navbar,NavbarBrand, Collapse, NavbarToggler, Jumbotron} from 'reactstrap';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen : false
        }
        this.toggleNav=this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <React.Fragment>
               
                <Navbar color="light" light expand="md" className="header" fixed='top'>
                <div className="container">
                    <NavbarBrand href="/">IPL STATS</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar >
                        <NavItem>
                                <NavLink className="nav-link" href="/#win">
                                    Winning Stats
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="/#team">
                                    Team Stats
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="/#season">
                                    Season Stats
                                </NavLink>
                            </NavItem>
                            
                            
                        </Nav>
                    </Collapse>
                    </div>
                </Navbar>
                
                <Jumbotron fluid  >
                    <div className="container">
                    <h1 className="display-4">Indian Premier League</h1>

                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
} 

export default Header;