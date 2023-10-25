import PageNotFoundImage from "../assets/pagenotfound.jpg";
export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-[#FF914D]">
            {" "}
            404! Oops!!
          </p>
          <div className="max-w-lg">
            <img src={PageNotFoundImage} alt="404 Page Not Found" />
          </div>
          <p className="text-4xl text-gray-700 font-bold my-10 dark:text-[#FF914D]">
            {" "}
            Try again later, or use a valid link.
          </p>
        </div>
      </section>
    </main>
  );
};
