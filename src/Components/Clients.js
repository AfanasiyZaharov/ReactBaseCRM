import React, { Component } from 'react';
import Client from './Client'
//component, that displays a clients list
class Clients extends Component {


    constructor(props) {
        super();
        this.state = { value: '', ...props };

    }

    clickClient(id) {
        this.props.clientClick(id);
    }


    filterClients(value) {
        let resArr = this.props.clients.filter((client) => {
            for (let key in client) {
                if (typeof client[key] == "string") {
                    if (client[key].search(value) != -1) {
                        return true;
                    }
                }
            }
        });
        return resArr;
    }

    changeFilterElem(e) {
        var value = e.target.value;
        this.setState({ value: value });
    }
    clickSearch() {
        let value = this.state.value;
        const clients = this.filterClients(value);
        this.setState({ clients: clients });
    }

    componentWillReceiveProps(nextProps) {
        const { clients } = nextProps
        this.setState({ clients: clients });
    }
    // componentWillMount(){
    //     debugger;
    //     const {clients} = this.props.clients
    //     this.setState({ clients: clients });
    // }
    render() {
        console.count('render');
        const { clients } = this.state;
        console.log('clients', clients);
        console.log(this.state);
        //const { clients } = this.state;
        return (
            <div>
                {
                    clients.loading ?
                        'Загрузка!!' :
                        <div>
                            <div className="form-inline">
                                <div className="formGroup">
                                    <label htmlFor="searchClients" >Search Clients</label>
                                    <input type="text" className="form-control" onChange={this.changeFilterElem.bind(this)} id="searchClients" />
                                </div>
                                <button className="btn btn-default" value={this.state.value} onClick={this.clickSearch.bind(this)} >Search</button>
                            </div>

                            <div className="list-group">
                                {clients.map(client => <Client key={client.id} client={client} onClientClick={this.clickClient.bind(this)} />)}
                            </div>
                        </div>
                }

            </div>
        )
    }
}

export default Clients