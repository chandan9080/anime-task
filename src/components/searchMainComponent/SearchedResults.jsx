import React, { useEffect } from "react";
import Card from "../cardComponent/Card";
import { fetchAnime } from "../../redux/searchAnime/action";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader";
import { search_increment } from "../../redux/searchPageNumber/reducer";

const MainSection = () => {
  const searchPageNumber = useSelector((state) => state.searchPageNumber);
  const { anime, query, loading, error } = useSelector(
    (state) => state.searchedAnime
  );
  console.log(error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchPageNumber !== 1) dispatch(fetchAnime(searchPageNumber, query));
  }, [searchPageNumber, error]);
  return (
    <div className="main_div">
      {anime === undefined ? (
        <div className="error">ERROR 404 DATA NOT FOUND for {query}</div>
      ) : (
        <>
          <div className="card_compenet">
            {anime.map((item) => (
              <Card key={item.mal_id} item={item} />
            ))}
          </div>

          {!loading ? (
            <span
              className="btn_load"
              onClick={(e) => {
                dispatch(search_increment());
              }}
            >
              Load more...
            </span>
          ) : (
            <Loader />
          )}
        </>
      )}
    </div>
  );
};

export default MainSection;
