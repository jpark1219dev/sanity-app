import React from "react";
import NavLink from "../shared/NavLink";

const NavHeader = ({ isAdmin, isAuthenticated }) => {
  return (
    <div className="nav-header">
      <div className="nav-left">
        <div className="nav-header__options mb-sm">
          <NavLink route="/">
            <span className="heading-tertiary nav-link mr-lg">Home</span>
          </NavLink>
          <NavLink route="/about">
            <span className="heading-tertiary nav-link mr-lg">About</span>
          </NavLink>
          <NavLink route="/curriculum">
            <span className="heading-tertiary nav-link mr-lg">Curriculum</span>
          </NavLink>
					<NavLink route="/workshops">
            <span className="heading-tertiary nav-link mr-lg">Workshops</span>
          </NavLink>
          <NavLink route="/blogs">
            <span className="heading-tertiary nav-link mr-lg">Blogs</span>
          </NavLink>
          <NavLink route="/contact">
            <span className="heading-tertiary nav-link mr-lg">Contact</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
