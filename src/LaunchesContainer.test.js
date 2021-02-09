import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { LaunchesContainer } from './containers/LaunchesContainer';
import { MockedProvider } from "@apollo/react-testing";
import { Launch } from './components/Launch.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<LaunchesContainer />', () => {
    //<LaunchesContainer /> exists
    it('it exists', () => {
        const wrapper = shallow(<MockedProvider><LaunchesContainer /></MockedProvider>);
        //console.log(wrapper.debug());
        expect(wrapper.find(LaunchesContainer).exists()).toBe(true);
    });

    //.launches_container exists
    it('it renders .launches_container', () => {
        const wrapper = mount(<MockedProvider><LaunchesContainer /></MockedProvider>)
        console.log(wrapper.debug());
        expect(wrapper.find('.launches_container').exists()).toBe(true);
    });
});