import { Link } from "react-router";
import "./Navbar.css";
import "./tuning-fork.css";
import TuningFork from "../../resources/tuning-fork.svg?react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faPersonChalkboard,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <a>Tohn.io</a>
        <li>
          <Link to={"/tuner"}>
            <TuningFork className="tuning-fork-svg"></TuningFork>{" "}
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
        <li style={{}}>
          <FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>
          <span> Effects</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
