import React, { Component } from 'react';

//header component, displays version
class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <h3>React based CRM version 0.0.1</h3>
                </div>
            </div>
        )
    }
}
export default Header