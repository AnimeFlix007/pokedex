import ClientOnly from "@/app/client/ClientOnly";
import Image from "next/image";
import GoogleSignInButton from "./GoogleSignInButton";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/pokeball.png"
            alt="Pokedex Logo"
            className=" mr-2"
            width={40}
            height={40}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Pokedex
          </span>
        </Link>
        <div className="flex md:order-2">
          <ClientOnly>
            <GoogleSignInButton />
          </ClientOnly>
        </div>
      </div>
    </nav>
  );
}
