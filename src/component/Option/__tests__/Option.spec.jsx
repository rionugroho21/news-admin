import React from 'react';
import { shallow } from 'enzyme';

import Option from '..';

test('Should render correctly', () => {
  const wrapper = shallow(<Option />);

  expect(wrapper).toMatchSnapshot();
});