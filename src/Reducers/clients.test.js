import { CLIENTS_LOADING, CLIENTS_LOADED, CLIENTS_EDITING_LOADING, CLIENT_EDITED, CLIENTS_ADDING_LOADING, CLIENT_ADDED } from '../Constants/Constants'

import clients from './clients'

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

const testAddedClient = {
    id: 0,
    name: "Василий",
    description: "Ты как там?",
    lastName: "Васин",
    middleName: "Васильевич",
    email: "123@123",
    phone: "89123211223"
}


const testEditedClient = {
    id: 0,
    name: "Измененный",
    description: "Ты как там?",
    lastName: "Васин",
    middleName: "Васильевич",
    email: "123@123",
    phone: "89123211223"
}

describe('clients reducer', () => {

    it('should handle initial state', () => {
        expect(
            clients(undefined, {})
        ).toEqual(initialState)
    });

    it('should add client', () => {
        expect(
            clients([], {
                type: CLIENT_ADDED,
                payload: testAddedClient
            })
        ).toEqual(initialState)
    });

    it('should edit client', () => {
        expect(
            clients(undefined, {
                type: CLIENT_EDITED,
                payload: testEditedClient
            })
        ).toEqual([testEditedClient])
    });


});