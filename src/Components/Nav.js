import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link to="/songs">Home</Link>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </div>
  );
};

export default Nav;
