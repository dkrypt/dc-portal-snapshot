import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'fetch-mock';

import App from '../src/App.js';
// import Footer from '../src/Components/Footer.js';
import Sidebar from '../src/Components/Sidebar.js';
import CenterHeader from '../src/Components/CenterHeader.js';

configure({adapter: new Adapter()});

describe('Testing from App.test.js <App />', () => {

    it('should render the App component', () => {
        fetchMock.get(`*`, JSON.stringify('SECONDGETOBJ'), { overwriteRoutes: false });
        const wrapper = shallow(<App />, { disableLifecycleMethods: true });
        expect(wrapper).toBeTruthy();
    });

    it('should render Header component only once', () => {
        fetchMock.get(`*`, JSON.stringify('SECONDGETOBJ'), { overwriteRoutes: false });
        const wrapper = shallow(<App />, { disableLifecycleMethods: true });
        expect(wrapper.find(CenterHeader).length).toBe(1);
    });

    it('should render Navbar component only once', () => {
        fetchMock.get(`*`, JSON.stringify('SECONDGETOBJ'), { overwriteRoutes: false });
        const wrapper = shallow(<App />, { disableLifecycleMethods: true });
        expect(wrapper.find(Sidebar).length).toBe(1);
    });

});
