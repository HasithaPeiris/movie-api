import Styles from "./hero.module.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const Hero = ({ movies }) => {
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <div className={Styles.movieCarouselContainer}>
      <Carousel>
        {movies.map((movie) => {
          return (
            <Paper key={movie.imdbId}>
              <div className={Styles.movieCardContainer}>
                <div
                  className={Styles.movieCard}
                  style={{ "--img": `url(${movie.backdrops[0]})` }}
                >
                  <div className={Styles.movieDetail}>
                    <div className={Styles.moviePoster}>
                      <img src={movie.poster} alt="" />
                    </div>
                    <div className={Styles.movieTitle}>
                      <h4>{movie.title}</h4>
                    </div>
                    <div className={Styles.movieButtonsContainer}>
                      <Link
                        to={`/Trailer/${movie.trailerLink.substring(
                          movie.trailerLink.length - 11
                        )}`}
                      >
                        <div className={Styles.playButtonIconContainer}>
                          <FontAwesomeIcon
                            className={Styles.playButtonIcon}
                            icon={faCirclePlay}
                          />
                        </div>
                      </Link>

                      <div className={Styles.movieReviewButtonContainer}>
                        <Button
                          variant="info"
                          onClick={() => reviews(movie.imdbId)}
                        >
                          Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
