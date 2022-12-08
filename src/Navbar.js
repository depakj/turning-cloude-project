import React from "react";
import "./Navbar.css";
import imgur_img from "./imges/imgur.png";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar_content">
            <img className="Imgur-icon" src={imgur_img} alt="imgur" />
            <button className="btn btn-primary" type="submit" >
              New Post
            </button>
            <div className="search-bar">
              <input
               className="search"
                type="search"
                placeholder="Images, #tags,@user Oh my!"
                aria-label="Search"
              />
            </div>
            <button className="btn btn-secondary" type="submit">
              Go Addfree
            </button>
            <a  className="signin"href="#">Sign IN</a>
            <button className="btn btn-primary" type="submit">
              Sign UP
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
