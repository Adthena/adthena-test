import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import UserSearch from './UserSearch';
import useFetch from '../useFetch';
import DarkModeSwitch from './DarkModeSwitch'
import UserInfo from './UserInfo'
import { ThemeContext } from './ThemeContext';
import { createGlobalStyle } from 'styled-components'


const TaskTwo = () => {
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [user, errorSearchUser] = useFetch(`https://jsonplaceholder.typicode.com/users?username=${userName}`, "username");
  const [todos, errorSearchTodos] = useFetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`, "userId");
  const [mode, setMode] = useState('light')


  const GlobalStyle = createGlobalStyle`
  body {
    background: ${mode === 'dark' ? 'black' : 'white'};
    color: ${mode === 'dark' ? 'white' : 'black'};
  }
`

  const handleSearch = (value) => {
    if (value) { setUserName(value); }
  }

  useEffect(() => {
    if (user && user.length) {
      setUserId(user[0].id);
    }
    else setUserId(null);
  }, [user]);



  return (
    <ThemeContext.Provider value={{ mode, 'toggleMode': setMode }} >
      <GlobalStyle />
      <DarkModeSwitch />
      {user && < UserInfo user={user} />}
      <div className="task">
        <div className="content">
          <UserSearch handleSearch={handleSearch} error={errorSearchUser} />
          {todos && <TodoList todos={todos} error={errorSearchTodos} />}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
export default TaskTwo;
