import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
	it('renders without crashing', () => {
		shallow(<Checkbox />)
	});
});