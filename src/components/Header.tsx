"use server";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { APP_NAME } from "@/config";

export async function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  );
}

export async function Header() {
  return (
    <header className={`px-10 py-6 bg-transparent fixed w-full top-0 z-50`}>
      <nav className="relative flex justify-between">
        <div className="flex w-full items-center justify-between md:gap-x-12">
          <Link className="text-2xl flex font-bold" href="/" aria-label="Home">
            <Image src={"/logo.svg"} width={50} height={50} alt="Logo" />
            <span className="p-2 font-sans text-blue-50">{APP_NAME}</span>
          </Link>
          <div className="hidden items-center space-x-4 md:flex">
            <Link className="font-bold text-white" href="/authenticate/login">
              Log in
            </Link>
            <Link 
              className="bg-white rounded-sm focus-visible:outline-red-600 bg-gradient-to-r from-teal-500 to-cyan-500 hover:bg-gradient-to-r hover:from-white hover:to-white text-white hover:shadow-white px-3.5 py-2.5 hover:text-black hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.5)] transition-all duration-300 font-bold"
              href={"/authenticate/signup"}
            >
              Sign up Free
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
