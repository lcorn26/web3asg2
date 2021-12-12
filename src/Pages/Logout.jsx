import React, { useState } from 'react';
import axios from 'axios';


export default function Logout() {
    function handleLogout() {
        axios.delete("http://localhost:8080/logout", 
        { crossdomain: true }, 
        { withCredentials: true})
    }
    return (
        <div>
            <div className="logout-button" onClick={() => handleLogout()}>Logout</div>
        </div>
        
    )

    
    
}
