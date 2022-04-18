import React from "react";
import { useSelector } from "react-redux";

const SearchRequest = () => {
  const { query, loading } = useSelector((state) => state.searchedAnime);
  const searchPageNumber = useSelector((state) => state.searchPageNumber);

  return (
    <div className="request">
      <span>{loading ? "Requesting:" : "Requested:"}</span>
      <a
        href={`https://api.jikan.moe/v3/search/anime?q=${query}&limit=16 &page=${searchPageNumber}`}
      >
        https://api.jikan.moe/v3/search/anime?q=${query}&limit=16 &page=$
        {searchPageNumber}`
      </a>
    </div>
  );
};

export default SearchRequest;
