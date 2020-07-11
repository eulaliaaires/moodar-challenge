import React from 'react';
import { Router } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from './routes';
import history from './services/history';

function App() {
  return (

    <Router history={history}>
      <Routes />
      <ToastContainer autoClose={3000} transition={Slide} style={{ paddingLeft: '15px', fontFamily: 'Raleway', fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase' }} />
    </Router>
    // <Home></Home>



  );
}

export default App;
