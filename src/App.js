import React,{ useEffect, useReducer, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup'
import { Dispatch, State } from './components/context';
import {initialState, reducer} from './components/reducer';
import AdminProducts from './components/adminProducts';
import Dealers from './components/dealers';
import Products from './components/products';


function App() {
const isAdminPath=!window.location.href.includes('view') && !window.location.href.includes('sign-in');
const [state, dispatch]=useReducer(reducer, initialState);

  return (
    <Router>
      <State.Provider value={state}>
        <Dispatch.Provider value={dispatch}>
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={`${isAdminPath?'/admin':'/view'}`}>
              My App
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                {
                  isAdminPath && 
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={'admin/'}>
                        Products
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'admin/dealers'}>
                        Dealers
                      </Link>
                    </li>
                    <li className="nav-item" style={{marginLeft:"960px"}}>
                      <Link className="nav-link" to={'admin/sign-in'}>
                       Log out
                      </Link>
                    </li>
                  </>
               }
               
              </ul>
            </div>
          </div>
        </nav>
            <Routes>
              <Route exact path="/view" element={<Products />} />
              <Route exact path="/admin" element={<AdminProducts />} />
              <Route path="/admin/sign-in" element={<Login />} />
              <Route path="/admin/dealers" element={<Dealers />} />
            </Routes>
          </div>
        </Dispatch.Provider>
      </State.Provider>
    </Router>
  )
}
export default App