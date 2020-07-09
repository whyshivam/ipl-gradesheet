import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Foot from './Footer';
class Main extends Component{

    render(){
        return(
            <React.Fragment>
                <Header/>
                <Content />
                <Foot />

            </React.Fragment>
        );
    }
}
export default Main;