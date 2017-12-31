import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import ImageForm from './ImageForm';

describe('<ImageForm />', () => {
	it('renders without crashing', () => {
		shallow(<ImageForm />)
	});
});