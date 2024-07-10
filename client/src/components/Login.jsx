import React, { useState, useContext } from "react";
import { PlayerContext } from "../context/PlayerContext.jsx";
// import { Form, Button } from "react-bootstrap";
import axios from "axios";
// import Login from "./Login";
import Display from "./Display.jsx";
import Player from "./Player";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // initial state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "https://vercel.com/shivangi-agarwals-projects/podcast-streaming/2ZvvWQPjwfLYjytTQLMGtFKJCtr6/api/auth/login",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <title>Login Page</title>
      {/* <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      /> */}
      <link rel="stylesheet" type="text/css" />
      <section className="bg-gray-50 dark:bg-black ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Podcast Listening
          </p>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="pt-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="pt-10">
                  <button
                    variant="primary"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    className="w-full text-white bg-blue-600 login hover:700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Login
                  </button>
                </div>

                <p className="text-sm font-light pt-5 text-gray-500 dark:text-gray-400">
                  Create an account?{" "}
                  <Link
                    to="/Register"
                    className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                  >
                    Create
                  </Link>
                </p>
              </form>
              {login ? navigate("/Display") : <p className="text-danger"></p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
