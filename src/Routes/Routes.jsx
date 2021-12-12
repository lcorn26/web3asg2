import React from "react";
import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";
import { Home } from "../Pages/Home";
import { Empty } from 'antd';
import { PlaysList } from "../Pages/PlayList";
import { Favourites } from "../Pages/Favourites";
import { PlayDetails } from "../Pages/PlayDetails";
import { Logout } from "../Pages/Logout";




export function Routings() {
    return (
        <div>
            <Router basename={window.location.pathname || ''}>
                <Routes>
                    <Route exact path='/' component={Home} element={<Home/>}></Route>
                    <Route exact path='/play-list' component={PlaysList} element={<PlaysList/>}></Route>
                    <Route exact path='/play-details/:id' component={PlayDetails} element={<PlayDetails/>}></Route>
                    <Route exact path='/favourites' component={Favourites} element={<Favourites/>}></Route>
                    <Route exact path="*" component={Empty} element={<Empty/>}/>
                    
                </Routes>
            </Router>
        </div>
    );
}
