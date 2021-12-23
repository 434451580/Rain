import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { Spin } from 'antd'
// import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
import { routes, renderRouter } from './routes';
import './App.less';


function App() {

  const isLogin = false
  // if (!isLogin) {

  // }
  const toggleTheme = (scopeName = "theme-default") => {
    document.documentElement.className = scopeName;
  };

  console.log(`app`)

  return (
    <React.StrictMode>
      <Suspense fallback={<Spin />}>
        <Router>
          <Routes>
            {/* {isLogin ? '' : <Navigate to='/login' />} */}
            {/* <Route path='*' element={() => {
              return <Navigate to='/login' />
            }} /> */}
            {/* <Route path='/' element={<Layouts />}>
              <Route path='/about' element={<About />} />
              <Route path='/home' element={<Home />} />
            </Route>
            <Route path='/login' element={<Login />} /> */}
            {renderRouter(routes)}
          </Routes>
        </Router>
      </Suspense>
    </React.StrictMode>
  );
}

export default App;
