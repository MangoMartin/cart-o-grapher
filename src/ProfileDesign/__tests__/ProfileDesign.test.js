import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Settings from '../index';

describe('<Settings />', () => {
	it('renders without crashing', () => {
		shallow(<Settings />)
	});
});