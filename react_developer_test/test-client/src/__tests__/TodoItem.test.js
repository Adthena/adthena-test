import React from 'react';
import { render } from "enzyme";
import TodoItem from '../components/tasktwo/components/TodoItem';

it('renders correctly', () => {
    const item = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    };
    const rendered = render(<TodoItem {...item} />)
    expect(rendered).toMatchSnapshot();
})
