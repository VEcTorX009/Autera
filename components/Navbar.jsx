import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const router = useRouter();

  useEffect(() => {
    var myNav = document.getElementById("mynav");
    window.onscroll = function () {
      if (document.body.scrollTop >= 200) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
      } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
      }
    };
  }, []);

  return (
    <>
      <nav id="mynav" className="py-2 bg-white fixed px-12 sm:px-4   w-full z-20 top-0">
        <div className=" flex flex-wrap items-center justify-between w-full">
          <Link href="/" className="flex justify-center items-center">
            <div>
              <svg
                width="39"
                height="44"
                viewBox="0 0 39 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.9767 0.252694C11.8677 1.2514 7.37495 8.41864 4.63915 19.9343C4.4016 20.9343 8.88038 22.7277 13.7349 23.5768C16.1961 24.0071 16.1725 24.0242 14.9214 22.7156C10.4938 18.0857 15.4442 10.5891 21.5209 12.7219C25.8433 14.2389 27.0965 19.2932 24.0138 22.7768C23.0692 23.8444 23.0233 23.9531 23.5651 23.8409C23.8972 23.772 25.0814 23.5261 26.1969 23.2946C30.4633 22.4089 34.4938 20.6049 34.2674 19.6826C30.5847 4.68055 25.2115 -1.35734 16.9767 0.252694ZM33.9295 27.3858C31.0654 28.0803 26.8483 28.7315 25.2138 28.7315C24.5693 28.7315 24.042 28.7744 24.042 28.8268C24.042 28.8793 24.2055 29.3113 24.4053 29.787C24.76 30.6313 26.8308 40.9289 26.8308 41.8481C26.8308 43.5136 27.8497 43.8634 32.7012 43.8634C38.5071 43.8634 39 43.58 39 40.2396C39 38.1244 36.8369 27.0387 36.3821 26.8229C36.3578 26.8113 35.2542 27.0647 33.9295 27.3858ZM2.26311 27.9119C-0.431361 38.1524 -0.701873 42.8347 1.35574 43.6128C1.72006 43.7507 3.98734 43.8634 6.39431 43.8634C12.1443 43.8634 11.5741 44.4985 13.1396 36.3532C13.8033 32.8993 14.4704 29.8435 14.6217 29.5617C14.9904 28.8768 14.785 28.7315 13.4476 28.7315C11.9382 28.7315 7.43072 28.0662 4.81738 27.4579C3.65598 27.1873 2.66216 26.9661 2.60892 26.9661C2.55543 26.9661 2.39976 27.3918 2.26311 27.9119Z"
                  fill="#FF8B13"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.9767 0.252694C11.8677 1.2514 7.37495 8.41864 4.63915 19.9343C4.4016 20.9343 8.88038 22.7277 13.7349 23.5768C16.1961 24.0071 16.1725 24.0242 14.9214 22.7156C10.4938 18.0857 15.4442 10.5891 21.5209 12.7219C25.8433 14.2389 27.0965 19.2932 24.0138 22.7768C23.0692 23.8444 23.0233 23.9531 23.5651 23.8409C23.8972 23.772 25.0814 23.5261 26.1969 23.2946C30.4633 22.4089 34.4938 20.6049 34.2674 19.6826C30.5847 4.68055 25.2115 -1.35734 16.9767 0.252694ZM33.9295 27.3858C31.0654 28.0803 26.8483 28.7315 25.2138 28.7315C24.5693 28.7315 24.042 28.7744 24.042 28.8268C24.042 28.8793 24.2055 29.3113 24.4053 29.787C24.76 30.6313 26.8308 40.9289 26.8308 41.8481C26.8308 43.5136 27.8497 43.8634 32.7012 43.8634C38.5071 43.8634 39 43.58 39 40.2396C39 38.1244 36.8369 27.0387 36.3821 26.8229C36.3578 26.8113 35.2542 27.0647 33.9295 27.3858ZM2.26311 27.9119C-0.431361 38.1524 -0.701873 42.8347 1.35574 43.6128C1.72006 43.7507 3.98734 43.8634 6.39431 43.8634C12.1443 43.8634 11.5741 44.4985 13.1396 36.3532C13.8033 32.8993 14.4704 29.8435 14.6217 29.5617C14.9904 28.8768 14.785 28.7315 13.4476 28.7315C11.9382 28.7315 7.43072 28.0662 4.81738 27.4579C3.65598 27.1873 2.66216 26.9661 2.60892 26.9661C2.55543 26.9661 2.39976 27.3918 2.26311 27.9119Z"
                  fill="url(#paint0_linear_1_363)"
                  fillOpacity="0.7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.9767 0.252694C11.8677 1.2514 7.37495 8.41864 4.63915 19.9343C4.4016 20.9343 8.88038 22.7277 13.7349 23.5768C16.1961 24.0071 16.1725 24.0242 14.9214 22.7156C10.4938 18.0857 15.4442 10.5891 21.5209 12.7219C25.8433 14.2389 27.0965 19.2932 24.0138 22.7768C23.0692 23.8444 23.0233 23.9531 23.5651 23.8409C23.8972 23.772 25.0814 23.5261 26.1969 23.2946C30.4633 22.4089 34.4938 20.6049 34.2674 19.6826C30.5847 4.68055 25.2115 -1.35734 16.9767 0.252694ZM33.9295 27.3858C31.0654 28.0803 26.8483 28.7315 25.2138 28.7315C24.5693 28.7315 24.042 28.7744 24.042 28.8268C24.042 28.8793 24.2055 29.3113 24.4053 29.787C24.76 30.6313 26.8308 40.9289 26.8308 41.8481C26.8308 43.5136 27.8497 43.8634 32.7012 43.8634C38.5071 43.8634 39 43.58 39 40.2396C39 38.1244 36.8369 27.0387 36.3821 26.8229C36.3578 26.8113 35.2542 27.0647 33.9295 27.3858ZM2.26311 27.9119C-0.431361 38.1524 -0.701873 42.8347 1.35574 43.6128C1.72006 43.7507 3.98734 43.8634 6.39431 43.8634C12.1443 43.8634 11.5741 44.4985 13.1396 36.3532C13.8033 32.8993 14.4704 29.8435 14.6217 29.5617C14.9904 28.8768 14.785 28.7315 13.4476 28.7315C11.9382 28.7315 7.43072 28.0662 4.81738 27.4579C3.65598 27.1873 2.66216 26.9661 2.60892 26.9661C2.55543 26.9661 2.39976 27.3918 2.26311 27.9119Z"
                  fill="url(#paint1_linear_1_363)"
                  fillOpacity="0.3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_363"
                    x1="39.043"
                    y1="20.302"
                    x2="3.43311"
                    y2="47.4673"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EA1179" />
                    <stop offset="1" stopColor="#EA1179" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_363"
                    x1="39.043"
                    y1="43.8826"
                    x2="19.5"
                    y2="43.8749"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EA1179" />
                    <stop offset="1" stopColor="#EA1179" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="self-center font-semibold pl-3 text-[#6F61C0] text-2xl   ">
              AuTera
            </span>
          </Link>
          <div className="flex space-x-4 md:order-2">
          <div className="flex flex-col p-4">
                <UserButton/>
          </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-transparent  rounded-lg md:flex-row md:space-x-8 text-[#6F61C0] md:mt-0 md:text-lg md:border-0 dark:border-gray-700">
              <li>
                <Link
                  href="/quizes"
                  className={
                    router.pathname === "/quizes"
                      ? "active transition-all hover:md:text-blue-700 "
                      : "inactive transition-all hover:md:text-blue-700"
                  }
                >
                  Quiz
                </Link>
              </li>
              <li>
                <Link
                  href="/calls"
                  className={
                    router.pathname === "/calls"
                      ? "active transition-all hover:md:text-blue-700"
                      : "inactive transition-all hover:md:text-blue-700"
                  }
                >
                  Calls
                </Link>
              </li>
              <li>
                <Link
                  href="/sessions"
                  className={
                    router.pathname === "/sessions"
                      ? "active transition-all hover:md:text-blue-700"
                      : "inactive transition-all hover:md:text-blue-700"
                  }
                >
                  Sessions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
