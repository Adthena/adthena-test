import React from 'react';
import { shallow } from "enzyme";
import TodoList from '../components/tasktwo/components/TodoList';
import TodoItem from '../components/tasktwo/components/TodoItem';

it('renders correctly', () => {
    const todos = [{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }, {
        "userId": 1,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }];
    const rendered = shallow(<TodoList todos={todos} />);
    expect(rendered.find(TodoItem)).toHaveLength(2);
    expect(rendered).toMatchSnapshot();
})
