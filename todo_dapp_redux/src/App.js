import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Section1 from './pages/Section1';
config.autoAddCss = false;
library.add(far, fas);


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/section1",
      element: <Section1 />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
