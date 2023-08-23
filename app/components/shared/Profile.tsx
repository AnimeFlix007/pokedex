"use client";

import { logOut } from "@/app/redux/slice/UserSlice";
import store, { RootState } from "@/app/redux/store";
import { firebaseAuth } from "@/firebase/firebase.config";
import { FirebaseError } from "firebase/app";
import { signOut } from "firebase/auth";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

type Props = {};

export default function Profile({}: Props) {
  const user = useSelector((store: RootState) => store.user.user);
  async function signOutHandler() {
    try {
      await signOut(firebaseAuth);
      store.dispatch(logOut({}));
      toast.success("logged Out Successfully");
    } catch (e) {
      const err = e instanceof FirebaseError;
      if (err) {
        toast.error(e.message);
      }
    }
  }
  return (
    <React.Fragment>
      <div className="flex items-center space-x-2 text-white hover:text-gray-300 mr-3">
        <Image
          className="w-10 h-10 rounded-full"
          src={user?.photoURL || "./images/DefaultUserImage.jpg"}
          alt="Rounded avatar"
          width={40}
          height={40}
        />
        <span>Devjit Bose</span>
      </div>
      <div>
        <button
          onClick={signOutHandler}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Log Out
        </button>
      </div>
    </React.Fragment>
  );
}
