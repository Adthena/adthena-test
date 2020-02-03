
import React from 'react';

const TodoItem = (props) => {
    return (
        <li className={!props.complete ? 'todo' : ''}>
            {props.title}
            {props.userId}
        </li>)
};

export default TodoItem;
