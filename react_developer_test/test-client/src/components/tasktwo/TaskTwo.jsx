import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import UserSearch from './components/UserSearch';
import useFetch from './hooks/useFetch';
import DarkModeSwitch from './components/DarkModeSwitch'
import UserInfo from './components/UserInfo'
import { ThemeContext } from './components/ThemeContext';
import { createGlobalStyle } from 'styled-components';
import "./css/TaskTwo.css";


const TaskTwo = () => {
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [user, errorSearchUser, loadingUser] = useFetch(`https://jsonplaceholder.typicode.com/users?username=${userName}`, "username");
  const [todos, errorSearchTodos, loadingTodos] = useFetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`, "userId");
  const [mode, setMode] = useState('light')


  const GlobalStyle = createGlobalStyle`
  body {
    background: ${mode === 'dark' ? 'black' : 'white'};
    color: ${mode === 'dark' ? 'white' : 'black'};
    div[class*='css-']{
      border-color: ${mode === 'dark' ? 'white' : 'black'};
      display: block !important;
      margin: 0 auto !important;
    }
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
      <div className="task-two">
        <div className="content">
          <UserSearch handleSearch={handleSearch} error={errorSearchUser} disabled={loadingUser} />
          <UserInfo user={user} loading={loadingUser} />
          <TodoList todos={todos} error={errorSearchTodos} loading={loadingTodos} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
export default TaskTwo;
