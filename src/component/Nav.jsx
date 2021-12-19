import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav>
                <ol>
                    <li><a href="html.html">HTML</a></li>
                    <li><a href="css.html">CSS</a></li>
                    <li><a href="javascript.html">Java Script</a></li>
                </ol> 
            </nav>
        );
    }
}

export default Nav;