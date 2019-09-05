import React from 'react';
import { shallow } from 'enzyme';

import Photo from '..';

test('Should render correctly', () => {
  const wrapper = shallow(<Photo />);

  expect(wrapper).toMatchSnapshot();
});