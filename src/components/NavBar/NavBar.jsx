import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
    <nav>
    <NavLink exact activeClassName="active" to="/">
    <h1>Restaurants</h1>
    </NavLink>

    <NavLink activeClassName="active" to="/users">
    <h1>My Account</h1>
    </NavLink>

    <NavLink activeClassName="active" to="/contact">
    <h1>Write a Review</h1>
    </NavLink>

    </nav>
);
}
export default NavBar