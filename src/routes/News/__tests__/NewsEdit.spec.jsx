import React from 'react';
import { shallow } from 'enzyme';

import NewsEdit from '../NewsEdit';

test('Should render correctly', () => {
  const wrapper = shallow(<NewsEdit />);

  expect(wrapper).toMatchSnapshot();
});