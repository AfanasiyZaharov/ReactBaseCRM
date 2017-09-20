import React, { Component } from 'react';

//header component, displays version
class Header extends Component {
    render() {
        const { version } = this.props;
        return (
            <div className="container">
                <div className="page-header">
                    <h3>React based CRM version {version}</h3>
                </div>
            </div>
        )
    }
}
export default Header