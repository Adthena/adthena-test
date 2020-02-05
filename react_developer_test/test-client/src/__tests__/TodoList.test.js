import React from 'react';
import { render } from "enzyme";
import TodoList from '../components/tasktwo/components/TodoList';

it('renders correctly', () => {
    const rendered = render(<TodoList />)
    expect(rendered).toMatchSnapshot();
})
