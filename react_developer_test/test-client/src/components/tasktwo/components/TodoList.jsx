import React, { useState } from 'react';
import TodoItem from './TodoItem';
import ClipLoader from "react-spinners/ClipLoader";

const TodoList = (props) => {
    return (
        <>
            <div className="todo-list">
                {props.todos && props.todos.map(item =>
                    <TodoItem {...item} key={item.id} />
                )}
            </div>
            <ClipLoader
                size={150}
                loading={props.loading}
            />
        </>
    );



}

export default TodoList;
