import { useRef, useState } from "react";
import Header from "./Header"
import checkValidData from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value,name.current?.value);
    setErrorMessage(message);

    if (message) return
    
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:USER_AVATAR
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });     
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +"-"+ errorMessage)
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <div className=" ">
      <Header />
      <div className="absolute bg-black bg-gradient-to-b  from-black">
        <img
          className="opacity-50"
          src= {BG_IMG}
        />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className="p-12 absolute  bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-800 bg-opacity-90 border rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-800 bg-opacity-90 border rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 bg-opacity-90 border border-gray-400 rounded-md"
        />
        <p className=" text-red-700 font-bold">{ errorMessage}</p>
        <button onClick={handleButtonClick} className="p-2 my-4 bg-red-700 w-full">{ isSignInForm ? "Sing In" : "Sign Up"}</button>
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
