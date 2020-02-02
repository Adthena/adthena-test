import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import UserSearch from './UserSearch';
import useFetch from '../useFetch';

const TaskTwo = () => {
  const [user, setUser] = useState(null);
  const [url, setUrl] = useState(null);
  const [todos, error] = useFetch(url);

  const handleSearch = (value) => {
    //handle valid user id/name ?
    setUser(value);
  }


  useEffect(() => {
    if (user) {
      setUrl(`https://jsonplaceholder.typicode.com/todos?userId=${user}`);
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
