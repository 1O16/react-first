import { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import MoiveDetail from "../components/Minutely";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovies(json);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <MoiveDetail
              background_cover_image={
                movies.data.movie.background_image_original
              }
              medium_cover_image={movies.data.movie.medium_cover_image}
              title={movies.data.movie.title}
              rating={movies.data.movie.rating}
              genres={movies.data.movie.genres}
              year={movies.data.movie.year}
              runtime={movies.data.movie.runtime}
              description_full={movies.data.movie.description_full}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;

// 디자인 참고 : https://github.com/mascaradee/mulberry/tree/main/src
