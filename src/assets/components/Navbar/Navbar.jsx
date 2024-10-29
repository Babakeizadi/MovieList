import React, { useState } from "react";
import fire from "../../img/fire.svg";
import partyingFace from "../../img/partying-face.svg";
import star from "../../img/white-medium-star.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ setDayMode, dayMode }) {

  return (
    <nav>
      <h1>Movies List</h1>

      <div className="nav-link">
        <label for="day-mode">Day Mode</label>
        <input
          type="checkbox"
          id="day-mode"
          onChange={() => {
            setDayMode(!dayMode);
          }}
        />

        <Link to='/popular' href="/">
          Popular
          <img src={fire} alt="" />
        </Link>

        <Link to='upcoming' href="/">
          Up Coming
          <img src={partyingFace} alt="" />
        </Link>

        <Link to='top_rated' href="/">
          Top rated
          <img src={star} alt="" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
