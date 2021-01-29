import React, { useState } from "react";
import "./Header.css";
import AppleIcon from "@material-ui/icons/Apple";
import SearchIcon from "@material-ui/icons/Search";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Search from "./Search";
import ClearIcon from "@material-ui/icons/Clear";
function Header() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <div className="header">
        {!showSearch ? (
          <MenuIcon onClick={() => setShowSearch(!showSearch)} />
        ) : (
          <ClearIcon onClick={() => setShowSearch(!showSearch)} />
        )}
        <AppleIcon />
        <a href="https://apple-clone-7a833.web.app/">Mac</a>
        <a href="https://apple-clone-7a833.web.app/">iPad</a>
        <a href="https://apple-clone-7a833.web.app/">iPhone</a>
        <a href="https://apple-clone-7a833.web.app/">Watch</a>
        <a href="https://apple-clone-7a833.web.app/">Tv</a>
        <a href="https://apple-clone-7a833.web.app/">Music</a>
        <a href="https://apple-clone-7a833.web.app/">Support</a>
        <SearchIcon />
        <LocalMallOutlinedIcon />
      </div>
      {showSearch && <Search />}
    </>
  );
}
export default Header;