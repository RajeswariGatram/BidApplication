import React from 'react';
import "../styles/Header.css"
import { Button } from '@mui/material';
import "../styles/Button.css"

function Header() {
    return (
        <div style={{ display: "flex", position: "sticky", top: 0, backgroundColor: "#FFE5F1", height: "9vh", justifyContent: "flex-end" }}>

            <button className='btn-grad' style={{ fontSize: 12, border: "none", borderRadius: 3, color: "white", padding: 2, paddingLeft: 7, paddingRight: 7 }}>Get Started</button>

        </div>
    );
}

export default Header;
