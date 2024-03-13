// import React from 'react'
import Link from "next/link";
// import { api } from "~/utils/api";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { setTimeout } from "timers";
import { TIMEOUT } from "dns";

const AdminNavbar = () => {
  const { data: sessionData } = useSession();
  return (
    <div className=" flex flex-row items-center justify-between bg-black p-4 text-white">
      <div>LOGO</div>
      <div className="flex flex-row items-center justify-center gap-10">
        <Link
          className={`${sessionData?.user?.role === "Admin" ? "block" : "hidden"}`}
          href={"/admin"}
        >
          Admin Dashboard
        </Link>
        <Link href={"/"}>Home</Link>
        <AuthShowcase />
      </div>
    </div>
  );
};

export default AdminNavbar;

function AuthShowcase() {
  const { data: sessionData } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await router.push("/");
    await signOut();
    // Redirect to the main page after sign-out
  };
  // const { data: secretMessage } = api.post.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined },
  // );
  return (
    <div className="flex items-center justify-center gap-4">
      <p className="text-center text-base text-white">
        {sessionData && <span>{sessionData.user?.name}</span>}
        {/* {secretMessage && <span> - {secretMessage}</span>} */}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={handleSignOut}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}