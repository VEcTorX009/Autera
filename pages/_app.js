import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CustomLoader from "@/components/CustomLoader";
import Home from "@/components/Home";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [userProfile, setUserProfile] = useState({ questions: 0, correct: 0 });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeEnd = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router]);
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" type="image/x-icon"></link>
      </Head>
      <ClerkProvider>
        <>
          <SignedIn>
            <>
              <div className="fadein">
                {loading && <CustomLoader />}
                <Navbar />

                <Component
                  setLoading={setLoading}
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                  {...pageProps}
                />
              </div>
            </>
          </SignedIn>
          <SignedOut>
            <Home />
          </SignedOut>
        </>
      </ClerkProvider>
    </>
  );
}
