import React, { Component } from 'react';

import { connect } from 'react-redux'
import * as editing from '../Actions/editClient'
import * as adding from '../Actions/addClient'

import { bindActionCreators } from 'redux'



/*
    Container, provides a form to edit client

*/

const stateComponentEditing = 'edit';
const stateComponentAdding = 'add'


class clientEdit extends Component {


    //handles click button 'edit' event
    clickEdit() {
        let formData = this.props.client;

        this.props.editing.editClient(formData);
        this.props.router.push('/')
    }
    //handles click button 'add' event
    clickAdd() {
        let formData = this.props.client;

        this.props.adding.addClient(formData);
        this.props.router.push('/')
    }


    //handles inputs changes
    handleFieldChange(event) {
        let target = event.target
        let formData = this.props.client
        formData[target.id] = target.value
        this.setState({ 'client': formData });

    }

    render() {
        let client = this.props.client;
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={client.name} className="form-control" id="name" onChange={this.handleFieldChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" value={client.lastName} className="form-control" id="lastName" onChange={this.handleFieldChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="middleName">Middle Name</label>
                        <input type="text" value={client.middleName} className="form-control" id="middleName" onChange={this.handleFieldChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" value={client.description} className="form-control" id="description" onChange={this.handleFieldChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={client.email} className="form-control" id="email" onChange={this.handleFieldChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="phone" value={client.phone} className="form-control" id="phone" onChange={this.handleFieldChange.bind(this)} />
                    </div>

                </form>

                {
                    this.props.stateComponent === stateComponentEditing ?
                        <button className="btn btn-default" onClick={this.clickEdit.bind(this)}>Edit</button> :
                        <button className="btn btn-default" onClick={this.clickAdd.bind(this)}>Add</button>
                }


            </div>


        )
    }
}


//this component can work in two cases - editing and adding
//if adding - we provide an empty client without id
//else - all client data
function mapStateToProps(state, ownProps) {
    let client,
        stateComponent;
    if (ownProps.params.clientId !== undefined) {
        client = state.clients.find((client) => {
            return client.id === +ownProps.params.clientId;
        });
        stateComponent = stateComponentEditing;
    } else {
        client = { name: "", description: "", middleName: "", lastName: "", phone: "", mail: "" }
        stateComponent = stateComponentAdding
    }

    return {
        client,
        stateComponent
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editing: bindActionCreators(editing, dispatch),
        adding: bindActionCreators(adding, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(clientEdit);