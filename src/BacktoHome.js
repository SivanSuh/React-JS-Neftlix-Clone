import React from 'react'
import { Link } from "react-router-dom"
function BacktoHome() {
    return (
        <div className="backtohome">
            <Link to="/" style={{color:"white"}}>Back To Home</Link>
        </div>
    )
}

export default BacktoHome
