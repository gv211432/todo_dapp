// ╺┳╸┏━┓╺┳┓┏━┓   ╺┳┓┏━┓┏━┓┏━┓
//  ┃ ┃ ┃ ┃┃┃ ┃    ┃┃┣━┫┣━┛┣━┛
//  ╹ ┗━┛╺┻┛┗━┛   ╺┻┛╹ ╹╹  ╹  
// this file is the origin of the app components mounting.

import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import HomePage from './pages/Home';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GlobalContext from './context/globalContext';
import ReportsPage from './pages/Reports';
import SharedPage from './pages/Shared';
import StatusPage from './pages/Status';
config.autoAddCss = false;
library.add(far, fas);

function App() {
  // this state can be used to share instance of ethers.js
  const [ethereum, setEthereum] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/reports",
      element: <ReportsPage />,
    },
    {
      path: "/status",
      element: <StatusPage />,
    },
    {
      path: "/shared",
      element: <SharedPage />,
    },
  ]);

  return (<GlobalContext.Provider
    value={{
      ethereum, setEthereum
    }}
  >
    <RouterProvider router={router} />;
  </GlobalContext.Provider>);
}

export default App;
