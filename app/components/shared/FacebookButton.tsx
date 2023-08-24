"use client";

import { setUser } from "@/app/redux/slice/UserSlice";
import store from "@/app/redux/store";
import { FacebookProvider, firebaseAuth } from "@/firebase/firebase.config";
import { FirebaseError } from "firebase/app";
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { toast } from "react-toastify";

type Props = {};

export default function FacebookButton({}: Props) {
  async function TwitterSignInHandler() {
    try {
      const data = await signInWithPopup(firebaseAuth, new TwitterAuthProvider());
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
      className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2"
      onClick={TwitterSignInHandler}
    >
      <svg
        className="w-4 h-4 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 17"
      >
        <path
          fill-rule="evenodd"
          d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
          clip-rule="evenodd"
        />
      </svg>
      Sign in with Twitter
    </button>
  );
}
