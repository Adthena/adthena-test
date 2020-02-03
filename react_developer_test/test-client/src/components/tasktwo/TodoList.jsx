import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
        <div className="list">
            {props.todos && props.todos.map(item =>
                <TodoItem {...item} key={item.id} />
            )}
        </div>
    );



}

export default TodoList;
