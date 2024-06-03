import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand bg-info" style={{'height':50}}>
        <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
                <button className="text-light btn btn-primary">Contact</button>
            </li>
            <li className="nav-item ">
                <button className="text-light ml-3 btn btn-primary">About</button>
            </li>
            <li className="nav-item ">
                <button className="text-light ml-3 btn btn-primary">Services</button>
            </li>
            <li className="nav-item">
                <button className="text-light mx-3 btn btn-primary">Register</button>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;


