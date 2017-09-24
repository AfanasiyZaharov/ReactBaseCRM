import React, { Component } from 'react';
import Client from './Client'

import { Link } from 'react-router'
//import { Link } from 'react-router'
//component, that displays a clients list
class Clients extends Component {

    //set init value of searching
    constructor(props) {
        super();
        this.state = { value: '', ...props };

    }


    //function, that filters client by search string
    //I wanted to make this method private
    // but es6 doesn't allow it
    filterClients(value) {
        let resArr = this.props.clients.filter((client) => {
            for (let key in client) {
                if (typeof client[key] === "string") {
                    if (client[key].search(value) !== -1) {
                        return true;
                    }
                }
            }
            return false;
        });
        return resArr;
    }
    //handles changing  search input
    changeFilterElem(e) {
        var value = e.target.value;
        this.setState({ value: value });
    }

    //handles search button click
    clickSearch() {
        let value = this.state.value;
        const clients = this.filterClients(value);
        this.setState({ clients: clients });
    }

    componentWillReceiveProps(nextProps) {
        const { clients } = nextProps
        this.setState({ clients: clients });
    }
    render() {
        const { clients } = this.state;
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
                                {clients.map(client => <Client key={client.id} client={client} />)}
                            </div>



                            <Link className="btn btn-defaul"
                                role="button"
                                to="/client/add/"> Add New</Link>
                        </div>
                }

            </div>
        )
    }
}

export default Clients