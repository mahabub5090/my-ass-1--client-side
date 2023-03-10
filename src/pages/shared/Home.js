import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="bg-gray-200">
      <div className="">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
            <i>Web Technology </i>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-800">
            A best Platfrom for Learning ...
          </p>
          <div className="flex flex-wrap justify-center">
            {user && user.uid ? (
              <Link to="/profile">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-600 text-gray-50"
                >
                  Visit Your Profile
                </button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <button
                    type="button"
                    className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-600 text-gray-50"
                  >
                    Login Here
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    type="button"
                    className="px-8 py-3 m-2 text-lg border rounded border-gray-600 text-gray-900"
                  >
                    Please Register Here
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
