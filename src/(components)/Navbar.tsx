// import React from 'react'
import { api } from "~/utils/api";

import { motion, MotionConfig, useAnimationControls } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const AnimationControls = () => {
  const controls = useAnimationControls();
};

const linkHover = () => {};

const Navbar = () => {
  const { data: sessionData } = useSession();

  return (
    <nav className="absolute z-[999] flex h-20 w-screen min-w-max items-center px-10">
      {/* Logo */}
      <motion.div
        className="ml-4 h-12 w-12 overflow-hidden rounded-full"
        whileHover={{ scale: 1.2 }}
      >
        <Link href={"/"}>
          <Image
            src="/logo.webp"
            alt="Logo"
            className="w-60"
            width={150}
            height={150}
          />
        </Link>
      </motion.div>

      {/* Links */}
      <div className="ml-20 flex items-center justify-center gap-12 text-[18px] font-normal text-[#FFF7F2]">
        <MotionConfig
          transition={{
            ease: "easeInOut",
            duration: 0.2,
          }}
        >
          <motion.a
            href={"/"}
            className=""
            whileHover={{
              scale: 1.125,
              rotate: "2deg",
              color: "#FE770B",
              textDecoration: "underline",
            }}
          >
            Event
          </motion.a>
          <motion.a
            href={"/"}
            className=""
            whileHover={{
              scale: 1.125,
              rotate: "2deg",
              color: "#FE770B",
              textDecoration: "underline",
            }}
          >
            Lapangan
          </motion.a>

          <motion.a
            href={"/"}
            className=""
            whileHover={{
              scale: 1.125,
              rotate: "2deg",
              color: "#FE770B",
              textDecoration: "underline",
            }}
          >
            Pesan
          </motion.a>
          <motion.a
            href={"/"}
            className={`${sessionData ? "block" : "hidden"}`}
            whileHover={{
              scale: 1.125,
              rotate: "2deg",
              color: "#FE770B",
              textDecoration: "underline",
            }}
          >
            Histori
          </motion.a>
        </MotionConfig>
      </div>

      {/* Sign In */}
      <div
        className={`absolute right-0 mr-16 flex items-center justify-center gap-8 text-[18px] font-normal text-[#FFF7F2]`}
      >
        <Link
          href={"/"}
          className={`${sessionData ? "hidden" : "block"}
          hover:rotate-2 hover:scale-110 hover:text-[#FE770B] hover:underline hover:transition-all hover:duration-300 hover:ease-in-out
          `}
          onClick={
            sessionData
              ? () => void signOut()
              : () =>
                  void signIn("google", {
                    callbackUrl: "http://localhost:3000",
                  })
          }
        >
          {sessionData ? "Logout" : "Sign in"}
        </Link>
        <div
          className={`rounded-full bg-[#FE770B] px-[18px] py-[5px] hover:rotate-2 hover:scale-110 hover:bg-transparent hover:transition-all hover:duration-300 hover:ease-in-out`}
        >
          <Link
            href={"/"}
            className="hover:rotate-2 hover:scale-110 hover:text-[#FE770B] hover:underline hover:transition-all hover:duration-300 hover:ease-in-out"
            onClick={
              sessionData
                ? () => void signOut()
                : () =>
                    void signIn("google", {
                      callbackUrl: "http://localhost:3000",
                    })
            }
          >
            {sessionData ? "Logout" : "Sign Up"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;