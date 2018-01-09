import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import AddLinks from './AddLinks';

describe('<AddLinks />', () => {
	it('renders without crashing', () => {
		shallow(<AddLinks />)
	});
});