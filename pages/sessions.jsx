import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

export default function sessions() {
  const [search, setSearch] = useState("")
  const therapists = [
    {
      name: "Andrew Smith",
      phone: "945949594",
      email: "andrewsmith@gmail.com",
      hours: "5 PM - 10 PM",
      image: "/t2.jpg",
    },
    {
      name: "Emily Johnson",
      phone: "987654321",
      email: "emilyjohnson@gmail.com",
      hours: "3 PM - 8 PM",
      image: "/t1.jpg",
    },
    {
      name: "John Doe",
      phone: "1234567894",
      email: "johndoe@gmail.com",
      hours: "2 PM - 7 PM",
      image: "/t3.jpg",
    },
    {
      name: "Maria Rodriguez",
      phone: "554535975",
      email: "mariarodriguez@gmail.com",
      hours: "4 PM - 9 PM",
      image: "/t4.jpg",
    },
    {
      name: "David Williams",
      phone: "7254143554",
      email: "davidwilliams@gmail.com",
      hours: "6 PM - 11 PM",
      image: "/t5.jpg",
    },
  ];
  const app = useRouter()
  const onsearch=(e)=>{
    e.preventDefault()
    app.push(`/sessions/#${search}`)
  }
  
  return (
    <>
      <Head>
        <title>Autera - Sessions</title>
      </Head>
      <div
        className={` bg-gradient-to-b from-pink-300 to-yellow-50  flex  space-y-4 flex-col pt-[100px] w-full min-h-screen  items-center `}
      >
        <h1 className="text-[#6F61C0] fadein font-semibold text-6xl">Find the best therapists online!</h1>
        <form className="mt-12 " onSubmit={onsearch}>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium  sr-only "
      >
        Search
      </label>
      <div class="relative">
        <div class="absolute border-none  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg 
            class="w-7  border-none   "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-[25vw]  border-none rounded-full bg-[#f3d0f48e] text-xl p-4 pl-14  "
          placeholder="Search Mockups, Logos..."
          required
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>
    </form>
        <div className={"transition-all p-2 flex space-y-4 flex-col fadein "}>
        {therapists.map(e =>{
return(

        <div id={e.name.toLowerCase()} className="flex bg-white justify-between items-center w-[60vw] space-x-3 p-4 h-[10vw] flex-row">
         <div className="flex  space-x-4 flex-row">
         <div className="flex object-fit flex-col">
          <Image src={e.image} className={"h-[7vw] w-[7vw]"} width={100} height={100}/>
         </div>
<div className="flex space-y-2 flex-col">
        <h1 className="text-pink-600 font-bold text-4xl">{e.name}</h1>
        <h1 className="text-gray-600 font-bold text-2xl">{e.phone}</h1>
        <h1 className="text-gray-600 font-bold text-2xl">{e.email}</h1>
        <h1 className="text-gray-600 font-bold text-2xl">{e.hours}</h1>

</div>

         </div>
         <div className="flex flex-col items-center justify-center p-3">
         <button
                type="button"
                
                className="py-3 px-16  transition-all   text-white rounded-3xl   bg-[#6F61C0]  text-2xl"
              >
              <Link href={`mailto:${e.email}`}>
                Contact Now
              </Link>
              </button>
         </div>
        </div>
)

        })}
        </div>
      </div>
    </>
  );
}
