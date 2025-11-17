import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

// main pages
import Home from './components/main pages/home';
import Login from './components/main pages/login';
import Signup from './components/main pages/signup';
import Dashboard from './components/main pages/dashboard'

// styling
import './css/variables.css';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='dashboard'
            element={<Dashboard />}
          />

          <Route
            path='/login'
            element={<Login />}
          />

          <Route
            path='/signup'
            element={<Signup />}
          />

        </Routes>
      </Router>
    </>
  );
}

export default App;
