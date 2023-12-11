import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import UserList from './components/UserList';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Dashboard />}/>
        <Route path={'/users'} element={<UserList />}/>
        <Route path={'/posts'} element={<Posts />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
