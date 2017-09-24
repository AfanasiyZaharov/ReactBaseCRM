

import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';



const store = configureMockStore()({});



describe('App component', () => {
    it('renders without crashing', () => {

        let AppComponent = shallow(<Provider store={store}><App /></Provider>);
    });

});



