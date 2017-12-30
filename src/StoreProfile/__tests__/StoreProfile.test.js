import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import MyStore from '../index';

describe('<MyStore />', () => {
	it('renders without crashing', () => {
		shallow(<MyStore />)
	});
});