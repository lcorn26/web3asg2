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

export function Routings() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/play-list' element={<PlaysList/>}></Route>
                    <Route path='/play-details/:id' element={<PlayDetails/>}></Route>
                    <Route path='/favourites' element={<Favourites/>}></Route>
                    <Route path="*" element={<Empty/>}/>
                </Routes>
            </Router>
        </div>
    );
}
