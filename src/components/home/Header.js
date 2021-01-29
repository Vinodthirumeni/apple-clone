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
        <a href="https://www.apple.com/in/mac/">Mac</a>
        <a href="https://www.apple.com/in/ipad/">iPad</a>
        <a href="https://www.apple.com/in/iphone/">iPhone</a>
        <a href="https://www.apple.com/in/watch/">Watch</a>
        <a href="https://www.apple.com/in/tv/">Tv</a>
        <a href="https://www.apple.com/in/music/">Music</a>
        <a href="https://support.apple.com/en-in">Support</a>
        <SearchIcon />
        <LocalMallOutlinedIcon />
      </div>
      {showSearch && <Search />}
    </>
  );
}
export default Header;