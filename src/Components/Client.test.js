import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import ReactDOM from 'react-dom';

import Client from './Client'


const client = {
    id: 0,
    name: "Василий",
    description: "Ты как там?",
    lastName: "Васин",
    middleName: "Васильевич",
    email: "123@123",
    phone: "89123211223"
};
describe('Client component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Client client={client} />, div);
    });
});
