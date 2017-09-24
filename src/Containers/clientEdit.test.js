
import React from 'react';
import ClientEdit from './clientEdit';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import { CLIENTS_LOADING, CLIENTS_LOADED, CLIENTS_EDITING_LOADING, CLIENT_EDITED, CLIENTS_ADDING_LOADING, CLIENT_ADDED } from '../Constants/Constants'


const initialState = [
    {
        id: 0,
        name: "Василий",
        description: "Ты как там?",
        lastName: "Васин",
        middleName: "Васильевич",
        email: "123@123",
        phone: "89123211223"
    },
];


const testRouteObject = {
    params: {
        clientId: 0
    }
};

const store = configureMockStore()(initialState);


describe('clientEdit component', () => {
    it('renders without crashing', () => {

 
        let AppComponent = shallow(<Provider store={store}><ClientEdit /></Provider>);

    });

    // it('edit client', () => {
    //     spyOn(store, 'dispatch');
        
    //     let AppComponent = shallow(<ClientEdit store={store} ownProps = {testRouteObject}/>);
    //     AppComponent.instance().clickAdd();
    //     expect(store.dispatch).toHaveBeenCalledWith(
    //         { type: CLIENT_ADDED,}
    //       );
    // });



});