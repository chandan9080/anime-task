import React from "react";
import { useSelector } from "react-redux";

const Request = () => {
  const { loading } = useSelector((state) => state.anime);
  const mainPageNumber = useSelector((state) => state.mainPageNumber);

  return (
    <div className="request">
      <span>{loading ? "Requesting:" : "Requested:"}</span>
      <a
        href={`https://api.jikan.moe/v3/search/anime?q=%3Cquery%3E&limit=16&page=${mainPageNumber}`}
      >
        https://api.jikan.moe/v3/search/anime?q=%3Cquery%3E&limit=16&page=
        {mainPageNumber}
      </a>
    </div>
  );
};

export default Request;
