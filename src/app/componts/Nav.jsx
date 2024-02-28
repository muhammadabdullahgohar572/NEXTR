"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";
export const Nav = () => {
  const router = useRouter();
  return (
    <>
      <nav class="text-white p-10">
        <div class="container mx-auto flex justify-between items-center">
         <Link href='/'>

          <span href="#" class=" text-black text-2xl font-bold">
            Your Logo
          </span>
         </Link>
          <div class="space-x-4">
            <span class=" text-black text-xl font-semibold hover:underline">
              Home
            </span>
            <Link href="/About">
              <span class=" text-black text-xl font-semibold hover:underline">
                About
              </span>
            </Link>
            <Link href="/Login">
              <span class=" text-black text-xl font-semibold hover:underline">
                Login
              </span>
            </Link>
            <span
              onClick={() => router.push("/About")}
              class=" cursor-pointer text-black text-xl font-semibold hover:underline"
            >
              Contact
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
