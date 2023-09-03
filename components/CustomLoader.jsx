import React from 'react'
import { Oval } from 'react-loader-spinner';
export default function CustomLoader() {
  return (
    <div className="flex w-full h-screen fixed z-100 bg-[#ffffff3d]  items-center justify-center">
      <Oval
  height={80}
  width={80}
  color="white"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#866FCD"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
    </div>
  )
}
