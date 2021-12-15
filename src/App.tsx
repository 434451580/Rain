import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Spin } from 'antd'
// import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
import { routes } from './routes';
import './App.less';

import Home from '@/pages/home'
import Layouts from '@/layouts';
import About from '@/pages/about'

function App() {

  const toggleTheme = (scopeName = "theme-default") => {
    document.documentElement.className = scopeName;
  };

  return (
    <React.StrictMode>
      <Suspense fallback={<Spin />}>
        <Router>
          <Routes>
            <Route path='/' element={<Layouts />}>
              <Route path='/about' element={<About />} />
              <Route path='/home' element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </React.StrictMode>
  );
}

export default App;
