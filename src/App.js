import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import './App.css';

import Home from './components/Home';
import Cover from './components/Cover';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/cover", element: <Cover /> },

  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
