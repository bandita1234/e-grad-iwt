import React, { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    u_name: "",
    u_email: "",
    u_password: "",
    c_password: "",
    u_age: "",
    u_gender: "",
    c_address: "",
    u_branch: "",
    u_skill: "",
  });

  const [error, setError] = useState({
    u_name: "",
    u_email: "",
    u_password: "",
    c_password: "",
    u_age: "",
    u_gender: "",
    c_address: "",
    u_branch: "",
    u_skill: "",
  });

  const handleChange = (e) => {
    if (e.target.name == "u_name" && e.target.value.length > 25) {
      setError({
        ...error,
        u_name: e.target.value,
      });
    } else {
      setError({
        ...error,
        u_name: "",
      });
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);
  return (
    <div className="w-screen min-h-screen text-center flex justify-center items-center bg-emerald-200">
      <div className="bg-gray-100 w-4/5 sm:w-3/5 lg:w-2/5 p-6 my-12 rounded-[16px]">
        <h1 className="text-2xl font-bold py-8">SIGNUP</h1>
        <form className="text-left" action="/" method="get">
          <div className="">
            <input
              className="w-full text-md p-2 my-6 border border-solid border-emerald-500"
              type="text"
              name="u_name"
              autoComplete="false"
              placeholder="Name"
              onChange={(e) => handleChange(e)}
              value={form.u_name}
            />
          </div>
          <div className="">
            <input
              className="w-full text-md p-2 my-6 border border-solid border-emerald-500"
              type="email"
              name="u_email"
              autoComplete="false"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
              value={form.u_email}
            />
          </div>
          <div>
            <input
              className="w-full text-md p-2 my-6 border border-solid border-emerald-500"
              type="password"
              name="u_password"
              autoComplete="false"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
              value={form.u_password}
            />
          </div>
          <div>
            <input
              className="w-full text-md p-2 my-6 border border-solid border-emerald-500"
              type="password"
              name="c_password"
              autoComplete="false"
              placeholder="Confirm Password"
              onChange={(e) => handleChange(e)}
              value={form.c_password}
            />
          </div>
          <div className="">
            <input
              className="w-full text-md p-2 my-6 border border-solid border-emerald-500"
              type="text"
              name="u_age"
              autoComplete="false"
              placeholder="Enter your age"
              onChange={(e) => handleChange(e)}
              value={form.u_age}
            />
          </div>
          <div className="">
            <label className="mb-2">Gender : </label>
            <div>
              <input
                className="mr-2"
                type="radio"
                id="male"
                name="u_gender"
                onChange={(e) => handleChange(e)}
                value="male"
                checked={form.u_gender == "male" ? "true" : "false"}
              />
              <label for="male" className="mr-4">
                Male
              </label>
              <input
                className="mr-2"
                type="radio"
                id="female"
                name="u_gender"
                onChange={(e) => handleChange(e)}
                value="female"
                checked={form.u_gender == "female" ? "true" : "false"}
              />
              <label for="female" className="mr-4">
                Female
              </label>
              <input
                className="mr-2"
                type="radio"
                id="others"
                name="u_gender"
                onChange={(e) => handleChange(e)}
                value="others"
                checked={form.u_gender == "others" ? "true" : "false"}
              />
              <label for="others" className="mr-4">
                Others
              </label>
            </div>
          </div>
          <div className=" mt-6">
            <label for="c_address" className="mr-4">
              College Address :
            </label>
            <textarea
              className="w-full border border-solid border-emerald-500"
              name="c_address"
              id="c_address"
              rows="5"
              onChange={(e) => handleChange(e)}
              value={form.c_address}
            ></textarea>
          </div>
          <div className=" ">
            <label for="branch_select">Branch : </label>

            <select
              className="w-full text-md p-2 mb-6 border border-solid border-emerald-500"
              name="u_branch"
              id="u_branch"
              onChange={(e) => handleChange(e)}
            >
              <option value="" className="text-gray-300" defaultChecked>
                -- Select your Branch--
              </option>
              <option value="cse"> CSE</option>
              <option value="cen">CEN</option>
              <option value="cst">CST</option>
              <option value="eee">EEE</option>
              <option value="ece">ECE</option>
              <option value="me">ME</option>
            </select>
          </div>
          <div className="">
            <label className="mb-2">Technical Skills : </label>
            <div>
              <input
                className="mr-2"
                type="checkbox"
                id="c_prog"
                name="c_prog"
              />
              <label for="c_prog" className="mr-4">
                C
              </label>
              <input
                className="mr-2"
                type="checkbox"
                id="java_prog"
                name="java_prog"
              />
              <label for="java_prog" className="mr-4">
                JAVA
              </label>
              <input
                className="mr-2"
                type="checkbox"
                id="python_prog"
                name="python_prog"
              />
              <label for="python_prog" className="mr-4">
                Python
              </label>
              <input
                className="mr-2"
                type="checkbox"
                id="JSP_prog"
                name="JSP_prog"
              />
              <label for="JSP_prog" className="mr-4">
                JSP
              </label>
            </div>
          </div>
          <div className="my-6">
            <label>Upload your resume:</label>
            <input
              className="w-full text-md p-2 "
              type="file"
              name="u_resume"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-emerald-400 mb-8 py-2 w-full text-white font-semibold"
            >
              SIGNUP
            </button>
          </div>

          <div className="text-center">
            <p>Already registered?</p>
            <a
              href="/login"
              className="text-emerald-600 hover:cursor-pointer hover:underline underline-offset-4"
            >
              Continue to login!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
