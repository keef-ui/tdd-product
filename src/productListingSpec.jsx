import React from 'react';
import { shallow } from 'enzyme';
import ProductListing from "./productListing"

describe('App', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});