import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
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

    useEffect(() => {
      const unsuscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });

      return () => unsuscribe();
    }, []);

  return (
    <div className="absolute px-8  z-10 w-full flex-auto md:flex justify-between bg-gradient-to-b  from-black">
      <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
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
