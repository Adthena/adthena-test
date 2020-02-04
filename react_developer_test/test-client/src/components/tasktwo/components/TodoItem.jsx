
import React from 'react';
import PropTypes from 'prop-types'

const TodoItem = (props) => {
    return (
        <li className={!props.completed ? 'todo' : ''}>
            {props.title}
        </li>)
};

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

export default TodoItem;
