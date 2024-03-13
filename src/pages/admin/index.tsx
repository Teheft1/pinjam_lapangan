import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();
  const { data: sessionData } = useSession();
  // if (!sessionData) {
  //   router.push("/");
  // }
  // if (sessionData?.user.role != "Admin") {
  //   return <div>Forbidden</div>;
  // }
  return (
    <div>
      Halo
      {/* <Link></Link>
    <Link></Link>
    <Link></Link>
    <Link></Link>
    <Link></Link> */}
    </div>
  );
};

export default Admin;
