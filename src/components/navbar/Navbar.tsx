import React from "react";
import { Link } from "react-router";
import "./Navbar.css";
import "./tuning-fork.css";
import Metronome from "../metronome/Metronome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tuningFork from "./assets/tuning-fork.svg";
import {
  faBookOpen,
  faPersonChalkboard,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons/faMusic";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <a>Tohn.io</a>
        <li style={{}}>
          <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
          <span> Test Item</span>
        </li>
        <li>
          <Link to={"/tuner"}>
            <svg className="tuning-fork-svg" viewBox="0 0 47 47">
              <g>
                <g>
                  <path
                    d="M40.975,1.968c-0.706-0.706-1.851-0.706-2.558,0c-0.706,0.706-0.706,1.85,0,2.557c5.81,5.813,5.81,15.27,0,21.081
			c-0.706,0.707-0.706,1.852,0,2.558c0.354,0.353,0.816,0.528,1.278,0.528s0.926-0.176,1.279-0.528
			C48.191,20.94,48.192,9.19,40.975,1.968z"
                  />
                  <path
                    d="M36.539,6.399c-0.707-0.707-1.85-0.707-2.556,0c-0.707,0.706-0.707,1.851,0,2.556c3.368,3.368,3.368,8.848-0.001,12.216
			c-0.706,0.706-0.706,1.851,0.001,2.558c0.353,0.352,0.814,0.528,1.278,0.528c0.463,0,0.926-0.177,1.278-0.53
			C41.316,18.95,41.316,11.176,36.539,6.399z"
                  />
                  <path
                    d="M8.583,4.524c0.706-0.707,0.706-1.851,0-2.557c-0.707-0.705-1.851-0.706-2.557,0c-7.218,7.223-7.217,18.973,0,26.193
			c0.353,0.354,0.816,0.529,1.279,0.529c0.463,0,0.925-0.176,1.278-0.529c0.706-0.706,0.706-1.852,0-2.557
			C2.772,19.793,2.772,10.336,8.583,4.524z"
                  />
                  <path
                    d="M13.016,8.955c0.707-0.706,0.707-1.851,0-2.556c-0.706-0.707-1.85-0.707-2.556,0c-4.777,4.777-4.777,12.551,0,17.33
			c0.353,0.353,0.816,0.529,1.279,0.529c0.463,0,0.925-0.177,1.278-0.529c0.707-0.707,0.707-1.851,0.001-2.557
			C9.647,17.803,9.647,12.323,13.016,8.955z"
                  />
                  <path
                    d="M29.525,0c-1.331,0-2.411,1.079-2.411,2.41v18.077c0,1.994-1.622,3.615-3.615,3.615c-1.993,0-3.615-1.622-3.615-3.615
			V2.41c0-1.331-1.08-2.41-2.411-2.41s-2.41,1.079-2.41,2.41v18.077c0,3.813,2.546,7.041,6.026,8.082V44.59
			c0,1.331,1.079,2.41,2.41,2.41c1.331,0,2.41-1.079,2.41-2.41V28.568c3.48-1.041,6.026-4.268,6.026-8.082V2.41
			C31.936,1.079,30.856,0,29.525,0z"
                  />
                </g>
              </g>
            </svg>{" "}
            <span>Tuner</span>
          </Link>
        </li>
        <li>
          <Link to={"/tutorials"}>
            <FontAwesomeIcon icon={faPersonChalkboard}></FontAwesomeIcon>{" "}
            <span>Tutorials</span>
          </Link>
        </li>
        <li>
          <Link to={"/tabs"}>
            <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>{" "}
            <span>Tabs</span>
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>{" "}
            <span>About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
