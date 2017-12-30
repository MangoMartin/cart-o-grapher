import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import MappedShops from '../LocalShops';

describe('<MappedShops />', () => {
	it('renders without crashing', () => {
		shallow(<MappedShops />)
	});
});