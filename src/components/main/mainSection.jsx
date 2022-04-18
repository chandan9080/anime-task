import React, { useEffect } from "react";
import Card from "../cardComponent/Card";
import Loader from "../Loader";
import { fetchAnime } from "../../redux/anime/action";
import { useSelector, useDispatch } from "react-redux";
import { main_increment } from "../../redux/pageNumber/reducer";

const MainSection = () => {
  const mainPageNumber = useSelector((state) => state.mainPageNumber);
  const { anime, loading, error } = useSelector((state) => state.anime);
  console.log(error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnime(mainPageNumber));
  }, [mainPageNumber]);
  return (
    <div className="main_div">
      {anime === undefined ? (
        <div className="error">ERROR 404 DATA NOT FOUND</div>
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
                dispatch(main_increment());
              }}
            >
              Load More...
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
