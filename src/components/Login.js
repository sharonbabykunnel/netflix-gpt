import { useState } from "react";
import Header from "./Header"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className=" ">
      <Header />
      <div className="absolute bg-black bg-gradient-to-b  from-black">
        <img
          className="opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>
      <form className="p-12 absolute  bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-800 bg-opacity-90 border rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-800 bg-opacity-90 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 bg-opacity-90 border border-gray-400 rounded-md"
        />
        <button className="p-2 my-4 bg-red-700 w-full">Sing In</button>
        <p className=" cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to NetFlix?Sign up Now"
            : "Allready Sign Up?Sign In"}
        </p>
      </form>
    </div>
  );
}

export default Login
