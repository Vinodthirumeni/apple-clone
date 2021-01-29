import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
function Search() {
  return (
    <div className="search">
      <SearchIcon />
      <input className="searchInput" placeholder="Search apple.com" />
      <a href="https://www.apple.com/in/mac/">Mac</a>
      <p></p>
      <a href="https://www.apple.com/in/ipad/">iPad</a>
      <p></p>
      <a href="https://www.apple.com/in/iphone/">iPhone</a>
      <p></p>
      <a href="https://www.apple.com/in/watch/">Watch</a>
      <p></p>
      <a href="https://www.apple.com/in/tv/">Tv</a>
      <p></p>
      <a href="https://www.apple.com/in/music/">Music</a>
      <p></p>
      <a href="https://support.apple.com/en-in">Support</a>
      <p></p>
    </div>
  );
}
export default Search;
