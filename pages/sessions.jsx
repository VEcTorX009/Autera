import Head from 'next/head'
import React from 'react'

export default function sessions() {
  return (
    <><Head><title>Autera - Sessions</title></Head><div
          className={` bg-gradient-to-b from-pink-300 to-yellow-50  flex  space-y-4 flex-col pt-[100px] w-full min-h-screen  items-center text-center`}
      >

          <div
              className={"transition-all fadein "}>
              <h1 className="text-[3vw] mt-[15vw] font-semibold text-white">
                  Find the best therapists online!
              </h1>
              <h1 className="text-[3vw]  font-semibold text-[#6F61C0] ">
                  Coming Soon
              </h1>
          </div>
      </div></>

  )
}
