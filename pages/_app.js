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
      <ClerkProvider>
        <>
          <SignedIn>
            <>
            <div className="fadein">

            {loading && <CustomLoader/>}
              <Navbar />

              <Component userProfile={userProfile} setUserProfile={setUserProfile} {...pageProps} />
            </div>
            </>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      </ClerkProvider>
    </>
  );
}
