import React from "react"
import { Link } from "react-router-dom"
import "./TopNav.css"

function TopNav() {
    return(
        <nav>
            <Link to="/" id="title">Recipes</Link>
            <div id="links">
                <Link to="/message" className="link">Message</Link>
                <Link to="/random" className="link">Random</Link>
                <Link to="/all" className="link">All</Link>
            </div>
        </nav>
    )
}

export default TopNav;