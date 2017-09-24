import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import addClient from './addClient';
import { CLIENTS_ADDING_LOADING, CLIENT_ADDED } from '../Constants/Constants';




const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const client = {
    name: "Василий",
    description: "Ты как там?",
    lastName: "Васин",
    middleName: "Васильевич",
    email: "123@123",
    phone: "89123211223"
};


describe('async actions addClient', () => {


    const expectedActions = [
        { type: CLIENTS_ADDING_LOADING },
        { type: CLIENT_ADDED }
    ];
    const store = mockStore([]);


    it('creates Adding ClientActions', () => {
        addClient(client);
        setTimeout(()=>{

            console.log("actions ===== ", store.getActions());
            expect(store.getActions()).toEqual(expectedActions);
        },500);
    });

});