import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavbarBrand, Collapse, NavbarToggler, Jumbotron } from 'reactstrap';
import { Link } from 'react-scroll'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>

                <Navbar color="light" light expand="md" className="header" >
                    <div className="container">
                        <NavbarBrand href="/ipl-gradesheet/">IPL Grade</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar >
                                <NavItem>
                                    <Link
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500} className="nav-link" to="win">
                                        Winning Grade
                                </Link>
                                </NavItem>
                                <NavItem>
                                    <Link
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500} className="nav-link" to="team">
                                        Team Grade
                                </Link>
                                </NavItem>
                                <NavItem>
                                    <Link
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500} className="nav-link" to="season">
                                        Season Grade
                                </Link>
                                </NavItem>


                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron fluid>
                    <div className="container jumbo">
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
