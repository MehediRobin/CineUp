import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Backup from "../assets/backup.jpg";

export const MovieDetail = () => {
  const params = useParams();

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`
                  https://api.themoviedb.org/3/movie/${params.id}?api_key=c35ad119967ac4612b3dffe8d6e611a9`);
      const json = await response.json();
      setMovie(json);
    }
    fetchMovie();
  }, [params]);
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : Backup;

  const logoBackup =
    "https://i.pinimg.com/564x/45/f4/54/45f4547eca227faa847d77322ce8ee4f.jpg";
  const genreList = movie.genres;
  const rating = movie.vote_average;
  const producerList = movie.production_companies;
  return (
    <main>
      <section className="flex justify-around flex-wrap  py-5 text-center lg:text-left">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={movie.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {movie.title}
          </h1>
          <p className="my-4">{movie.overview}</p>
          <div>
            {movie.genres ? (
              <p className="my-7 flex flex-wrap gap-2 justify-center lg:justify-start">
                {genreList.map((genre) => (
                  <span
                    key={genre.id}
                    className="mr-2 border rounded border-gray-200 p-2 dark:border-gray-600"
                  >
                    {genre.name}
                  </span>
                ))}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 font-bold text-gray-900 dark:text-white">
              {rating?.toFixed(1)}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span href="#" className=" text-gray-900 dark:text-white">
              {movie.vote_count} reviews
            </span>
          </div>
          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span> {movie.runtime} min</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.budget} </span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue: </span>
            <span>{movie.revenue}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span> {movie.release_date}</span>
          </p>
          <div>
            {producerList ? (
              <div className="w-[100%] my-7 flex flex-row flex-wrap gap-12 justify-center items-center mt-20">
                {producerList?.map((producer) => (
                  <div
                    key={producer.id}
                    className="w-[28%] flex flex-col items-center"
                  >
                    <div className="w-[60%] justify-center items-center">
                      <img
                        className="w-[100%] mx-h-auto"
                        src={
                          producer.logo_path
                            ? `https://image.tmdb.org/t/p/w500/${producer.logo_path}`
                            : logoBackup
                        }
                        alt=""
                      />
                    </div>
                    <div className="mr-2 mt-2 text-center">{producer.name}</div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
