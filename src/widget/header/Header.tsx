import { Actions } from "./ui/Actions";
import logo from "../../../public/snapedit_1742135635683.jpeg";
import "./styles/header.css";
import "./styles/headerMedia.css";
import { Navbar } from "./ui/Navbar";
import { Search } from "./model/search/ui/Search";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <NavLink to="/" className="header-logo-link">
          <h1>Breackably games</h1>
        </NavLink>
        <Actions />
      </div>
      <div className="header-bottom">
        <Navbar />
        <Search />
      </div>
    </div>
  );
};
