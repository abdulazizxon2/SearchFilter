import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextData } from "../Context/Context";

export default function Navbar() {
  let { searchs } = useContext(ContextData)
  return (<div>
    <div className="navbar">
      <div className="chapnavbar">
        <ul>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/services"}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"blog"}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={"/apidata"}>ApiData</NavLink>
          </li>
        </ul>
      </div>
      <div className="ongnavbar">
        <input type="search" onChange={searchs} />
        <button type="submit">Submit</button>
      </div>
    </div>
  </div>);
}