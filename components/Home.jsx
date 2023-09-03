import React, { useState } from "react";
import {
    RedirectToSignIn,
  } from "@clerk/nextjs";
export default function Home() {
    const [login, setLogin] = useState(false)
  return (
    <div className="flex flex-col fixed justify-center items-center h-screen w-full bg-[#866FCD] space-y-2 font-bold text-white">
      <h1 className="text-[4vw]">
        Empowering <span className="text-pink-300">Autism</span>{" "}
      </h1>
      <h1 className="text-[3vw]">Building Bridges to Brighter Tomorrows </h1>
      <button
      onClick={()=> setLogin(true)}
        type="button"
        className="py-3 px-12  transition-all  hover:bg-[#685bb0] hover:text-white   text-[#6F61C0] bg-white text-3xl rounded-xl"
      >
        Try Now
      </button>
      {login &&  <RedirectToSignIn />}
    </div>
  );
}
