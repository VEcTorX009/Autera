import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home({showpopup, setShowpopup,setUserProfile,userProfile,setShownotif}) {
  const [option, setOption] = useState("")

  const start =()=>{
    setShowpopup(false)
    setUserProfile({...userProfile,interests: option})
    setShownotif(true)
  }
  return (
    <>
      <Head>
        <title>Autera</title>
        <meta
          name="description"
          content="Empowering Autism
Building Bridges to Brighter Tomorrows"
        />
      </Head>
      {showpopup ? <div className="flex flex-col fixed justify-center items-center h-screen w-full bg-[#866FCD] space-y-2 font-bold text-white">
      
      <h1 className="text-[3vw]">Select Your Interests! </h1>
      <div className="flex text-[#866FCD] flex-col space-y-2">
                  <div className="flex flex-row space-x-2">
                    <div
                      onClick={() => {
                        setOption("technology");
                      }}
                      className={` ${
                        option === "technology"
                          ? "text-white bg-[#6F61C0]"
                          : "bg-white"
                      } cursor-pointer font-semibold  items-center  transition-all  flex text-2xl border border-black w-[10vw] rounded-xl p-2`}
                    >
                      
                      Technology
                    </div>
                    <div
                      onClick={() => {
                        setOption("arts");
                      }}
                      className={` ${
                        option === "arts"
                          ? "text-white bg-[#6F61C0]"
                          : "bg-white"
                      } cursor-pointer font-semibold  items-center  transition-all  flex text-2xl border border-black w-[10vw] rounded-xl p-2`}
                    >
                      
                      Arts
                    </div>
                    <div
                      onClick={() => {
                        setOption("gaming");
                      }}
                      className={` ${
                        option === "gaming"
                          ? "text-white bg-[#6F61C0]"
                          : "bg-white"
                      } cursor-pointer font-semibold  items-center  transition-all  flex text-2xl border border-black w-[10vw] rounded-xl p-2`}
                    >
                      
                      Gaming
                    </div>
                    <div
                      onClick={() => {
                        setOption("everything");
                      }}
                      className={` ${
                        option === "everything"
                          ? "text-white bg-[#6F61C0]"
                          : "bg-white"
                      } cursor-pointer font-semibold  items-center  transition-all  flex text-2xl border border-black w-[10vw] rounded-xl p-2`}
                    >
                      
                      Everything
                    </div>
                    <div
                      onClick={() => {
                        setOption("science");
                      }}
                      className={` ${
                        option === "science"
                          ? "text-white bg-[#6F61C0]"
                          : "bg-white"
                      } cursor-pointer font-semibold  items-center  transition-all  flex text-2xl border border-black w-[10vw] rounded-xl p-2`}
                    >
                    
                      Science
                    </div>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <div
                      onClick={() => {
                        setOption("finance");
                      }}
                      className={` ${
                        option === "finance"
                          ? "text-white bg-[#6F61C0]"
                          : "bg-white"
                      } cursor-pointer font-semibold  items-center  transition-all  flex text-2xl border border-black w-[10vw] rounded-xl p-2`}
                    >
                      
                      Finance
                    </div>
                    <div
                      onClick={() => {
                        setOption("dance");
                      }}
                      className={` ${
                        option === "dance"
                          ? "text-white bg-[#6F61C0]"
                          : "bg-white"
                      } cursor-pointer font-semibold  items-center  transition-all  flex text-2xl border border-black w-[10vw] rounded-xl p-2`}
                    >
                      
                      Dance
                    </div>
                    <div
                      onClick={() => {
                        setOption("music");
                      }}
                      className={` ${
                        option === "music"
                          ? "text-white bg-[#6F61C0]"
                          : "bg-white"
                      } cursor-pointer font-semibold  items-center  transition-all  flex text-2xl border border-black w-[10vw] rounded-xl p-2`}
                    >
                      
                      Music
                    </div>
                    <div
                      onClick={() => {
                        setOption("research");
                      }}
                      className={` ${
                        option === "research"
                          ? "text-white bg-[#6F61C0]"
                          : "bg-white"
                      } cursor-pointer font-semibold  items-center  transition-all  flex text-2xl border border-black w-[10vw] rounded-xl p-2`}
                    >
                      
                      Research
                    </div>
                    <div
                      onClick={() => {
                        setOption("sports");
                      }}
                      className={` ${
                        option === "sports"
                          ? "text-white bg-[#6F61C0]"
                          : "bg-white"
                      } cursor-pointer font-semibold  items-center  transition-all  flex text-2xl border border-black w-[10vw] rounded-xl p-2`}
                    >
                    
                    Sports
                    </div>
                  </div>
                  </div>
      <button
      onClick={start}
        type="button"
        className="py-3 px-12  transition-all  hover:bg-[#685bb0] hover:text-white   text-[#6F61C0] bg-white text-3xl rounded-xl"
      >
        Continue
      </button>
   
    </div>
    :
      <div className="min-h-screen pt-[100px] fadein flex flex-col p-8">
        <div className="flex flex-col space-y-5">
          <div className="flex-row flex justify-between space-x-3">
            <div className="text-white flex flex-col rounded-2xl space-y-6 h-[20vw] w-[90vw] p-12 bg-gradient-to-br from-purple-800 to-white justify-center  ">
              <h2 className="text-[2vw] font-semibold">Quizlets</h2>
              <p className="text-[1vw]">
                Unlock the power of emotion recognition with our interactive
                quizzes, designed to support your journey.Unlock the power of
                emotion recognition with our interactive quizzes, designed to
                support your journey.
              </p>
              <div>
                <button
                  type="button"
                  className="py-2 px-10  transition-all  hover:bg-[#685bb0] hover:text-white   text-[#6F61C0] bg-white text-lg"
                >
                  <Link href={"/quizes"}>Try Now</Link>
                </button>
              </div>
            </div>
            <div className="text-[#6F61C0] flex border border-[#6F61C0] flex-col rounded-2xl space-y-6 h-[20vw] w-[90vw] p-12  justify-center  ">
              <h2 className="text-[2vw] font-semibold">Video Calls</h2>
              <p className="text-[1vw]">
                Experience meaningful connections through video calls with
                friendly individuals worldwide. If you prefer a more comfortable
                interaction, you can also connect through text messages. Our
                platform is designed to foster connection and support on your
                terms.
              </p>
              <div>
                <button
                  type="button"
                  className="py-2 px-10  transition-all   hover:bg-[#685bb0] hover:text-white   text-white bg-[#6F61C0] text-lg"
                >
                  <Link href={"/calls"}>Try Now</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-col dashboardbg space-y-7 justify-center flex p-6 w-full ">
            <div className="flex text-white flex-col space-y-7 h-[22vw] justify-center p-6">
              <h2 className="text-[2vw] font-semibold">Therapy Connect</h2>
              <p className="text-[1vw] w-[60vw]">
                Say goodbye to financial barriers and hello to accessible
                therapy. Our in-app therapist connection feature offers you
                affordable sessions, putting your well-being first without
                breaking the bank. Reach out to experienced professionals who
                are here to guide you on your journey towards a better quality
                of life.
              </p>
              <div>
                <button
                  type="button"
                  className="py-2 px-10  transition-all  hover:bg-[#685bb0] hover:text-white   text-[#6F61C0] bg-white text-lg"
                >
                  <Link href={"/sessions"}>Try Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  );
}
