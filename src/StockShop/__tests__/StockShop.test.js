import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import AddProduct from '../index';

describe('<AddProduct />', () => {
	it('renders without crashing', () => {
		shallow(<AddProduct />)
	});
});