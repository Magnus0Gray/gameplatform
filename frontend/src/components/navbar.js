import React from 'react';
import { NavLink } from 'react-router-dom';
export default function NavBar() {
    return (
        <nav>
            <NavLink className={({ isActive }) => (isActive ? 'pageButtonSelected' : 'pageButton')} to="store">
                Store
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'pageButtonSelected' : 'pageButton')} to="lib">
                Library
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'pageButtonSelected' : 'pageButton')} to="fav">
                Favourites
            </NavLink>
        </nav>
    );
}