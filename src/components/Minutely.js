import PropTypes from "prop-types";

function MoiveDetail({
  background_cover_image,
  title,
  rating,
  genres,
  year,
  runtime,
  description_full,
  medium_cover_image,
}) {
  return (
    <>
      <img src={background_cover_image} alt={title} />
      <img src={medium_cover_image} alt={title} />
      <h1>
        {title} ({year})
      </h1>
      <div>Rating : {rating}</div>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <div>runtime : {runtime}분</div>
      <div>{description_full}</div>
    </>
  );
}

MoiveDetail.propTypes = {
  background_cover_image: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  description_full: PropTypes.string.isRequired,
};

export default MoiveDetail;
