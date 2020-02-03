import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import UserSearch from './UserSearch';
import useFetch from '../useFetch';

const TaskTwo = () => {
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [user, errorSearchUser] = useFetch(`https://jsonplaceholder.typicode.com/users?username=${userName}`);
  const [todos, errorSearchTodos] = useFetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);



  const handleSearch = (value) => {
    // @TODO handle valid user id/name ?
    setUserName(value);
  }

  useEffect(() => {
    if (user && user.length) {
      setUserId(user[0].id)
    }
  }, [user]);



  return (
    <div className="task">
      <div className="content">
        <UserSearch handleSearch={handleSearch} />
        {todos && <TodoList todos={todos} />}
      </div>
    </div>
  );
}
export default TaskTwo;
