import React, { Component } from 'react';

import { Link } from 'react-router'

/*
    displays a client
*/
class Client extends Component {
    render() {
        const { client } = this.props
        return (
            <div className="list-group-item" onClick={() => { this.props.onClientClick(client.id) }}>
                {client.lastName} {client.name}, {client.middleName}, {client.email} , {client.phone}  {client.description}   
                <Link to = {`client/${client.id}`}>Редактировать</Link>

            </div>
        )
    }
}

export default Client