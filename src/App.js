import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Chat from './Chat';
import Login from './Login';
import {useStateValue} from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {/* <h1>Slack clone🚀🚀🚀</h1> */}
      <Router>  
        {!user ? (
          <Login />
        ):(
          <>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Routes>
             {/* <Chat /> */}
            <Route path='/room/:roomId' element={<Chat />} />
            <Route path='/' />
          </Routes>
          {/* React router --> Chat screen*/}
        </div>
        </>
        )}
      </Router> 
    </div>
  );
}

export default App;
