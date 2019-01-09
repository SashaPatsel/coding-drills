import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('Home', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Home debug />);
  
    expect(component).toMatchSnapshot();
  });
});