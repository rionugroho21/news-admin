import React from 'react';
import { shallow } from 'enzyme';

import Popup from '..';

test('Should render correctly', () => {
  const wrapper = shallow(<Popup />);

  expect(wrapper).toMatchSnapshot();
});