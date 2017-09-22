import React, { Component } from 'react';

/*
    displays a client
*/
class Client extends Component{
    render(){
        const {client } = this.props
        return(
            <div className = "list-group-item" onClick = {() => {this.props.onClientClick(client.id)  }}>
                {client.lastName} {client.name}, {client.middleName}, {client.email} , {client.phone}  {client.description}
                

            </div>
        )
    }
}

export default Client