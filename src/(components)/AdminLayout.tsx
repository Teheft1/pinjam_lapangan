// const AdminLayout: React.FC = ({ children }) => {
//   return (
//     <div>
//       <h1>Admin Layout 2</h1>
//       {children}
//     </div>
//   );
// };

// export default AdminLayout;
// components/AdminLayout.tsx

import React, { ReactNode } from "react";
import AdminNavbar from "./AdminNav";
import { useSession } from "next-auth/react";
import Link from "next/link";
// import Navbar from "./Navbar"; // Assuming you have a Navbar component

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { data: sessionData } = useSession();
  if (sessionData?.user.role != "Admin") {
    return (
      <div className="flex flex-col">
        <h1>Forbidden 403</h1>
        <Link href={"/"}>Back To Main Page</Link>
      </div>
    );
  }
  return (
    <div>
      <AdminNavbar />
      <div style={{ marginLeft: "250px" }}>
        {/* Add your admin layout elements here */}
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
