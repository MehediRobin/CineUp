import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div>
      <footer className="bg-white shadow w-full dark:border-t-2 dark:border-slate-600 dark:bg-gray-800 flex justify-center items-center">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex flex-col justify-center items-center md:items-center md:justify-between flex lg:justify-between lg:flex-row gap-10">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              CineUp
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="#"
                target="_blank"
                className="mr-4 hover:underline md:mr-6 "
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="mr-4 hover:underline md:mr-6"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="mr-4 hover:underline md:mr-6"
              >
                Youtube
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="hover:underline">
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
