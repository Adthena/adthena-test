
import React from 'react';

const TodoItem = (props) => {
    return (
        <li className={!props.complete ? 'todo' : ''}>
            {props.title}
        </li>)
};

export default TodoItem;
