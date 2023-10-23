import React from "react";
import "./Signin.css";

const Signin = () => {
  return (
    <>
      <div className="flex mx-auto mt-[30vh] flex-col  w-4/5 md:w-2/5">
        <div className="ml-4 font-bold mb-5">
          <h1 className="text-3xl text-gray-800">Sign in</h1>
        </div>
        <div>
          {/* form  */}
          <form action="" className="flex flex-col ">
            <div className="flex-col flex w-auto m-3">
              <label className="text-gray-400 mb-3" htmlFor="email">
                Email Address
              </label>
              <input
                name="email"
                className="border-b-2 border-blue-600 p-2"
                type="email"
              />
            </div>
            <div className="flex-col flex w-auto  m-3">
              <label className="text-gray-400 mb-3" htmlFor="password">
                Password
              </label>
              <input
                className="border-b-2 border-blue-600 p-2"
                name="password"
                type="password"
              />
            </div>
            <div className="ml-4">
              <a className="text-blue-700 text-lg" href="">
                Forgot Password?
              </a>
            </div>
            <div className="w-4/5 text-center mx-auto mt-[6vh]">
              <button className="bg-blue-700 text-white p-4 flex w-full rounded-2xl	">
                Sign in
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </form>
          {/* end of form */}
        </div>
      </div>
    </>
  );
};

export default Signin;
