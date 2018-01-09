import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Home from '../index';

describe('<Home />', () => {
	it('renders without crashing', () => {
		shallow(<Home />)
	});
});