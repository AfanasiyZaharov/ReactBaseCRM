import React, { Component } from 'react';

/*
    displays a client
*/
class Client extends Component{
    render(){
        const {client } = this.props
        return(
            <div onClick = {() => {this.props.onClientClick(client.id)  }}>
                <p>{client.name}</p>
                <p>{client.description}</p>
            </div>
        )
    }
}

export default Client