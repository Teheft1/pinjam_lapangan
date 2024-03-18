import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Navbar from "~/(components)/Navbar";
import { useRouter } from "next/router";
import AdminLayout from "~/(components)/AdminLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  const adminPanel = router.route.startsWith("/admin");

  return (
    <SessionProvider session={session}>
      <main className={`font-sans ${inter.variable}`}>
        {!adminPanel && <Navbar />}
        {adminPanel ? (
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
