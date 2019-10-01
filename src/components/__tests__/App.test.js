/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';

describe('components/App', () => {
  let wrapper;
  let props;
  let instance;

  const setup = () => {
    wrapper = shallow(<App {...props} />);
    instance = wrapper.instance();
  };

  const update = () => {
    wrapper.update();
  };

  beforeEach(() => {
    props = {
      testPromiseFailure: jest.fn(() => Promise.reject(new Error())),
      testPromiseSuccess: jest.fn(() => Promise.resolve()),
    };
  });

  it('renders without crashing', () => {
    setup();
    expect(wrapper.length).toBe(1);
  });
});
