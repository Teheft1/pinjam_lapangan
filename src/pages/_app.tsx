

import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { Poppins } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";


import { Navbar, Hero } from "~/(components)";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const MyApp: AppType<{ session: Session | null }> = ({

  pageProps: { session, ...pageProps },
}) => {

  // const adminPanel = router.route.startsWith("/admin");
  return (
    <SessionProvider session={session}>
      <main className={`${poppins.className}`}>
        <Navbar />
        <Hero />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
