import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
function Search() {
  return (
    <div className="search">
      <SearchIcon />
      <input className="searchInput" placeholder="Search apple.com" />
      <a href="https://apple-clone-7a833.web.app/">Mac</a>
      <p></p>
      <a href="https://apple-clone-7a833.web.app/">iPad</a>
      <p></p>
      <a href="https://apple-clone-7a833.web.app/">iPhone</a>
      <p></p>
      <a href="https://apple-clone-7a833.web.app/">Watch</a>
      <p></p>
      <a href="https://apple-clone-7a833.web.app/">Tv</a>
      <p></p>
      <a href="https://apple-clone-7a833.web.app/">Music</a>
      <p></p>
      <a href="https://apple-clone-7a833.web.app/">Support</a>
      <p></p>
    </div>
  );
}
export default Search;
