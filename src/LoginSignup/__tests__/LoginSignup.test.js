import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Login from '../index';

describe('<Login />', () => {
	it('renders without crashing', () => {
		shallow(<Login />)
	});
});

