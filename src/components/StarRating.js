import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const startList = [];

  const starFillCount = Math.floor(rating);

  const hasHalfStar = rating - parseInt(rating) >= 0.5;

  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  for (let i = 1; i <= starFillCount; i++) {
    startList.push(<FaStar key={"star-fill" + i} />);
  }

  if (hasHalfStar) {
    startList.push(<FaStarHalfAlt key={"star-half"} />);
  }

  for (let i = 1; i <= emptyStarCount; i++) {
    startList.push(<FaRegStar key={"star-empty" + i} />);
  }

  return (
    <div className="flex gap-4 text-lg">
      <div className="flex gap-1">{startList}</div>
      <div>{rating}/5</div>
    </div>
  );
};

export default StarRating;
