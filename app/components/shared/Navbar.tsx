import ClientOnly from "@/app/client/ClientOnly";
import Image from "next/image";
import Link from "next/link";
import NavbarActions from "./NavbarActions";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="bg-slate-200 border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/pokeball.png"
            alt="Pokedex Logo"
            className=" mr-2"
            width={40}
            height={40}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Pokedex
          </span>
        </Link>
        <div className="flex md:order-2">
          <ClientOnly>
            <NavbarActions />
          </ClientOnly>
        </div>
      </div>
    </nav>
  );
}
