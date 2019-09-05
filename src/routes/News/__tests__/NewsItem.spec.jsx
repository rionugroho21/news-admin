import React from 'react';
import { shallow } from 'enzyme';

import NewsItem from '../NewsItem';

test('Should render correctly', () => {
  const wrapper = shallow(<NewsItem />);

  expect(wrapper).toMatchSnapshot();
});