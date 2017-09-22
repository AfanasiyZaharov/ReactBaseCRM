import React, { Component } from 'react';

import * as clickActions from '../Actions/clickClientAction'

import { connect } from 'react-redux'


class clientEdit extends Component {
    render() {
        const { name } = this.props.client
        return (
            <div>{name}</div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    
    var client =  state.clients.find((client)=>{
        return client.id == ownProps.params.clientId;
    });
    console.log(client)
    return {
        client
    }
}

export default connect(mapStateToProps)(clientEdit);