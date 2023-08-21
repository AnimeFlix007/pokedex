"use client"

import { firebaseAuth } from "@/firebase/firebase.config";
import { signOut } from "firebase/auth";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Profile({}: Props) {
  return (
    <React.Fragment>
      <div className="flex items-center space-x-2 text-white hover:text-gray-300 mr-3">
        <Image
          className="w-10 h-10 rounded-full"
          src={
            "https://lh3.googleusercontent.com/a/AAcHTtfi8ppwwzRGHhcld9_aTOtGLgvrNNRYci9_v9uelLGxfw=s96-c"
          }
          alt="Rounded avatar"
          width={40}
          height={40}
        />
        <span>Devjit Bose</span>
      </div>
      <div>
        <button
          onClick={() => signOut(firebaseAuth)}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Log Out
        </button>
      </div>
    </React.Fragment>
  );
}
