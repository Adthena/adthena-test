import React from 'react';
import { render } from "enzyme";
import TaskTwo from '../components/tasktwo/TaskTwo';

it('renders correctly', () => {
    const rendered = render(<TaskTwo />)
    expect(rendered).toMatchSnapshot();
})
