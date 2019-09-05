import React from 'react';
import { shallow } from 'enzyme';

import NewsAdd from '../NewsAdd';

test('Should render correctly', () => {
  const wrapper = shallow(<NewsAdd />);

  expect(wrapper).toMatchSnapshot();
});