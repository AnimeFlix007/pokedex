"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ClientOnly({ children }: Props) {
  const [mount, setMount] = React.useState(false);
  React.useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return null;
  return <React.Fragment>{children}</React.Fragment>;
}
