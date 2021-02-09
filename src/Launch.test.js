import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Launch } from './components/Launch.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<Launch />', () => {
    it('exists', () => {
        const wrapper = shallow(<Launch />);
        expect(wrapper.exists()).toBe(true);
    });
});