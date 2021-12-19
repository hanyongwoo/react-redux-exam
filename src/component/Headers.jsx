import React, { Component } from 'react';
import {connect} from  'react-redux';

class Headers extends Component {
    render() {
        return (
            <header> 
                <h1><a href="#welcome" onClick={function() {
                    this.props.onClick();  
                }.bind(this)}>WEB</a></h1>
                World Wide Web!
               
            </header>
        );
    }
}

export default connect()(Headers);