import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        navigate("/error")
      });
  }

  return (
    <div className="absolute px-8  z-10 w-full flex justify-between bg-gradient-to-b  from-black">
      <img
        className="w-44"
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png"
        alt="logo"
      />
      {user && (<div className=" flex p-2">
        <img
          className="w-12 h-12"
          alt="userLogo"
          src={user?.photoURL}
        />
        <button className=" font-bold text-white" onClick={handleSignOut}>Sign Out</button>
      </div>)}
    </div>
  );
}

export default Header
