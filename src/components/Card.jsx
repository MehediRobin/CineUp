import { Link } from "react-router-dom";
import Backup from "../assets/backup.jpg";

export const Card = ({ movie }) => {
  const { original_title, overview, poster_path, vote_average, release_date } =
    movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backup;
  return (
    <div>
      <div className=" m-3  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img className="rounded-t-lg" src={image} alt="" />
        </Link>
        <div className="p-5">
          <Link to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {original_title}
            </h5>
          </Link>
          <div className="inline-flex text-sm font-medium text-[#FF914D] rounded-lg">
            Release Date: {release_date}
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FF914D] rounded-lg">
            IMDb: {vote_average}
          </div>
        </div>
      </div>
    </div>
  );
};
