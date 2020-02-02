import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    const [todos, setTodos] = useState(props.todos);
    return (
        <div className="list">
            <ul>
                {todos && todos.map(item =>
                    <TodoItem {...item} key={item.id} />
                )}
            </ul>
        </div>
    );



}

export default TodoList;
