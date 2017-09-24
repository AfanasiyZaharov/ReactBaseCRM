import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import ReactDOM from 'react-dom';
import rerender from 'react-test-renderer'
import Clients from './Clients'

import { shallow } from 'enzyme';

const clients = [{
    id: 0,
    name: "Василий",
    description: "Ты как там?",
    lastName: "Васин",
    middleName: "Васильевич",
    email: "123@123",
    phone: "89123211223"
}];


const inputValue = {
    target: {
        value: "asddsadsadsad"
    }
};

describe('Clients component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Clients clients={clients} />, div);
    });
    it('shows clients', () => {
        const clientsComponent = shallow(<Clients clients={clients} />);
        expect(clientsComponent.instance().props.clients).toEqual(clients);
    });

    it('filtered clients', () => {

        const clientsComponent = shallow(<Clients clients={clients} />);

        clientsComponent.instance().changeFilterElem(inputValue);

        clientsComponent.instance().clickSearch();
         expect(clientsComponent.instance().state.clients).toEqual([]);
    });
});