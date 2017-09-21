import React, { Component } from 'react';
import Client from './Client'

class Clients extends Component {
    clickClient(id){
        this.props.clientClick(id);
    }

    render() {
        const { clients } = this.props
        return (
            <ul>
                {clients.map( client => <Client key = {client.id} client = {client} onClientClick = {this.clickClient.bind(this)} />   )}
            </ul>
        )
    }
}

export default Clients