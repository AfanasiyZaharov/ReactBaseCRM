import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import ReactDOM from 'react-dom';

import Header from './Header'


describe('Header component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header/>, div);
    });
});
