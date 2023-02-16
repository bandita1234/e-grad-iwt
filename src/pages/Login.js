import React from "react";

const Login = () => {
  return (
    <div className="w-screen h-screen text-center flex justify-center items-center bg-emerald-200">
      <div className="bg-gray-100 w-4/5 sm:w-3/5 lg:w-1/3 p-6">
        <h1 className="text-2xl font-bold py-8">LOGIN</h1>
        <form action="">
          <div className="">
            <input
              className="w-full text-md p-2 my-6"
              type="email"
              name="u_email"
              autoComplete="false"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="w-full text-md p-2 "
              type="password"
              name="u_password"
              autoComplete="false"
              placeholder="Password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-emerald-400 my-12 py-2 w-full text-white font-semibold"
            >
              LOGIN
            </button>
          </div>

          <div>
            <p>Not registered yet?</p>
            <a
              href="/signup"
              className="text-emerald-600 hover:cursor-pointer hover:underline underline-offset-4"
            >
              Create an account!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
