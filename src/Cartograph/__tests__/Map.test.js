import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import MapContainer from '../Map';

describe('<MapContainer />', () => {
	it('renders without crashing', () => {
		shallow(<MapContainer />)
	});
});