"use client"

import { setUser } from "@/app/redux/slice/UserSlice";
import store from "@/app/redux/store";
import { FacebookProvider, firebaseAuth } from "@/firebase/firebase.config";
import { FirebaseError } from "firebase/app";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { toast } from "react-toastify";

type Props = {};

export default function FacebookButton({}: Props) {
  async function FacebookSignInHandler() {
    try {
      const data = await signInWithPopup(firebaseAuth, FacebookProvider);
      console.log(data);
      const { user } = data;
      const userDetails = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        id: user.uid,
      };
      store.dispatch(setUser(userDetails));
      toast.success("LoggedIn Successfully");
    } catch (e) {
      const err = e instanceof FirebaseError;
      if (err) {
        toast.error(e.message);
      }
    }
  }
  return (
    <button
      type="button"
      className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
      onClick={FacebookSignInHandler}
    >
      <svg
        className="w-4 h-4 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 8 19"
      >
        <path
          fill-rule="evenodd"
          d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
          clip-rule="evenodd"
        />
      </svg>
      Sign in with Facebook
    </button>
  );
}
