import React from 'react';
import { shallow } from 'enzyme';

import News from '..';

test('Should render correctly', () => {
  const wrapper = shallow(<News />);

  expect(wrapper).toMatchSnapshot();
});