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
               
                <Navbar color="light" light expand="md" className="header" >
                <div className="container">
                    <NavbarBrand href="/ipl-gradesheet/">IPL gradesheet</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar >
                        <NavItem>
                                <NavLink className="nav-link" href="/ipl-gradesheet/#win">
                                    Winning gradesheet
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="/ipl-gradesheet/#team">
                                    Team gradesheet
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="/ipl-gradesheet/#season">
                                    Season gradesheet
                                </NavLink>
                            </NavItem>
                            
                            
                        </Nav>
                    </Collapse>
                    </div>
                </Navbar>
                <Jumbotron fluid>
                    <div  className="container jumbo">
                        <div className=" jumbo-head col-12">
                            <span>
                            <h1 className="display-3">Indian Premiere League</h1>
                            </span>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
} 

export default Header;

//<h1 className="jumbo-head display-4">Indian Premier League</h1>
