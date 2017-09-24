import React, { Component } from 'react';

import { Link } from 'react-router'

/*
    displays a client
*/
class Client extends Component {
    render() {
        const { client } = this.props
        return (
            <div className="list-group-item" >
                {client.lastName} {client.name}, {client.middleName}, {client.email} , {client.phone}  {client.description}   
                <Link to = {`client/edit/${client.id}`}> Edit</Link>

            </div>
        )
    }
}

export default Client