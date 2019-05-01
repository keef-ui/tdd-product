import React from 'react';
import { shallow,mount,render } from 'enzyme';
import ProductListing from "./productListing"



const wait = (wrapper, predicate, timeout = 10) => {
  //https://medium.com/homeaway-tech-blog/integration-testing-in-react-21f92a55a894
  return new Promise((resolve, reject) => {
    if (predicate(wrapper)) {
      return resolve(true);
    }
    setTimeout(() => {
      wrapper.update();
      return predicate(wrapper) ? resolve(true) : reject(new Error('Timeout expired'));
    }, timeout);
  });
};

// jest.mock("./services/fetchProductList");
describe('ProductListing', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(<ProductListing />);
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should render a divs with class name product', async () => {
    const wrapper2 = mount(<ProductListing/>);
 
 // Wait for component to render and the a div with class div.product is rendered
  await wait(wrapper2, w =>
    w
      .find('div.product').exists()
);
expect(wrapper2.find('div div.product').length).toEqual(6);
  });
});