import React from 'react';
import { render } from "enzyme";
import TodoItem from '../components/tasktwo/TodoItem';

it('renders correctly', () => {
    const rendered = render(<TodoItem />)
    expect(rendered).toMatchSnapshot();
})
