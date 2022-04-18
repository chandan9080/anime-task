import React from "react";

const Card = (props) => {
  const { mal_id, image_url, title } = props.item;
  return (
    <div className="card_item">
      <div className="img_section">
        <img src={image_url} alt={mal_id} />
      </div>
      <div className="card_title">{title}</div>
    </div>
  );
};

export default Card;
