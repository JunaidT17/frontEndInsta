import React, { useEffect, useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import User from './components/User';
import Login from './components/Login';
import Post from './components/Post';


function App() {
    const [currentRoute, setCurrentRoute] = useState();
    useEffect(()=>{

        const path=window.location.pathname.toLocaleLowerCase();
        setCurrentRoute(path.slice(1,path.length));

    },[]);



    return (
        <BrowserRouter>
            <nav className="m-1 p-1 border border-info">
                <ul className="nav nav-pills">
                    <li>
                        <NavLink
                            onClick={() => setCurrentRoute("Home")}
                            className={currentRoute === "Home" ? "btn btn-outline-info ms-1" : 'btn btn-outline-info ms-1'}
                            to="/Home"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={() => setCurrentRoute("User")}
                            className={currentRoute === "User" ? "btn btn-outline-info ms-1" : 'btn btn-outline-info ms-1'}
                            to="/User"
                        >
                            Registration
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={() => setCurrentRoute("Post")}
                            className={currentRoute === "Post" ? "btn btn-outline-info ms-1" : 'btn btn-outline-info ms-1'}
                            to="/Post"
                        >
                            Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={() => setCurrentRoute("Login")}
                            className={currentRoute === "Login" ? "btn btn-outline-info ms-1" : 'btn btn-outline-info ms-1'}
                            to="/Login"
                        >
                            Login
                        </NavLink>
                    </li>


                    {/*<li>*/}
                    {/*    <NavLink*/}
                    {/*        onClick={() => setCurrentRoute("VendreBillets")}*/}
                    {/*        className={currentRoute === "VendreBillets" ? "btn btn-outline-info ms-1" : 'btn btn-outline-info ms-1'}*/}
                    {/*        to="/VendreBillets"*/}
                    {/*    >*/}
                    {/*        VendreBillets*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                </ul>
            </nav>

            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Post" element={<Post />} />
                <Route path="/User" element={<User />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
