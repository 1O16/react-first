import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, year, summary, genres, id }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>({year})
      </h2>
      <img src={coverImg} alt={title} />
      <p>{summary.length > 500 ? `${summary.slice(0, 500)}...` : summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;
