import React from "react";

type ReviewProps = {
  author: string;
  rating: number;
  content: string;
  profileImage: string; // URL of the profile image
};

const Review: React.FC<ReviewProps> = ({
  author,
  rating,
  content,
  profileImage,
}) => {
  return (
    <div className="flex flex-col gap-2 p-4 ">
      <div className="flex  gap-1">
        <div className="flex-shrink-0 mr-4">
          <img
            src={profileImage || "https://via.placeholder.com/150"}
            alt={author}
            className="w-10 h-10 rounded-full"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">{author}</h3>
      </div>
      <div>
        <div className="flex items-center w-full mb-2">
          <StarRating rating={rating} />
          <span className="ml-2 text-gray-600">{rating}</span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

type StarRatingProps = {
  rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating); //rounds down to the nearest integer
  const hasHalfStar = rating % 1 !== 0; //checks if the rating is a whole number

  const stars = Array.from({ length: 5 }, (_, index) => {
    const starClass =
      index < fullStars
        ? "text-yellow-400 fas fa-star"
        : index === fullStars && hasHalfStar
        ? "text-yellow-400 fas fa-star-half-alt"
        : "text-gray-300 far fa-star";

    return <i key={index} className={starClass} />;
  });

  return <div className="flex items-center">{stars}</div>;
};

export default Review;
