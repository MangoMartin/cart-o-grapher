import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Container from '../index';

describe('<Container />', () => {
	it('renders without crashing', () => {
		shallow(<Container />)
	});
});
