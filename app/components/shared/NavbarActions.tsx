"use client";

import React from "react";
import GoogleSignInButton from "./GoogleSignInButton";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

type Props = {};

export default function NavbarActions({}: Props) {
  const user = useSelector((store: RootState) => store.user.user);
  return (
    <>
      {user ? (
        <Profile />
      ) : (
          <GoogleSignInButton />
      )}
    </>
  );
}
