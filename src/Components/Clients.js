import React, { Component } from 'react';
import Client from './Client'
//component, that displays a clients list
class Clients extends Component {
    clickClient(id) {
        this.props.clientClick(id);
    }

    render() {
        const { clients } = this.props
        return (
            <div>
                {
                    clients.loading ?
                        'Загрузка!!' :
                        <ul>
                            {clients.map(client => <Client key={client.id} client={client} onClientClick={this.clickClient.bind(this)} />)}
                        </ul>
                }

            </div>
        )
    }
}

export default Clients