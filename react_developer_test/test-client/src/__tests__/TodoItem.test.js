import React from 'react';
import { render } from "enzyme";
import TodoItem from '../components/tasktwo/components/TodoItem';

it('renders correctly', () => {
    const rendered = render(<TodoItem />)
    expect(rendered).toMatchSnapshot();
})
