import React from 'react';
import { shallow } from 'enzyme';
import Launches from './launches';

describe('Launches', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Launches />);
    expect(wrapper).toMatchSnapshot();
  });
});
