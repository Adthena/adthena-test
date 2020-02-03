
import React from 'react';
import PropTypes from 'prop-types'
import './TodoItem.css'

const TodoItem = (props) => {
    return (
        <li className={!props.completed ? 'todo' : ''}>
            {props.title}
        </li>)
};

TodoItem.PropTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

export default TodoItem;
