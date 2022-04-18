import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnime } from "../../redux/searchAnime/action";
import Request from "./Request";
import SearchRequest from "./SearchRequest";
const Navbar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const { query } = useSelector((state) => state.searchedAnime);
  return (
    <div className="navbar">
      <div className="input_container">
        <input
          className="input_field"
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button onClick={() => dispatch(fetchAnime(1, inputValue))}>Go</button>
      </div>
      {!query ? <Request></Request> : <SearchRequest />}
    </div>
  );
};

export default Navbar;
