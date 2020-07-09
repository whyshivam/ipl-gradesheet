import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
class Main extends Component{

    render(){
        return(
            <React.Fragment>
                <Header/>
                <Content />

            </React.Fragment>
        );
    }
}
export default Main;