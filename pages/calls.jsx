import React, { useState } from "react";
import { Spinner } from "@nextui-org/react";
import Head from "next/head";

export default function calls({ setLoading }) {
  const [showCall, setshowCall] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [send, setSend] = useState(false);
  const [mutevideo, setMutevideo] = useState(true);
  const [message, setMessage] = useState("");
  const messages = [
    "Hello! How are you?",
    "I'm fine! Just getting started with this Amazing Platform",
    "Oh I see! That's Great!",
    "That's totally okay. We can chat at your pace, no pressure.",
  ];
  const [a, setA] = useState({a:"Hello! How are you?",b:"I'm fine! Just getting started with this Amazing Platform",c:"Oh I see! That's Great!",d:"",e:"Hello! How are you?"})
  const [response, setResponse] = useState(false);
  const startcall = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setshowCall(true);
    }, 3000);
    loadface();
  };
  const loadface = () => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 3000);
  };
  const setmutevideo = () => {
    if (mutevideo) {
      setMutevideo(false);
    } else {
      setMutevideo(true);
    }
  };
  const sendmessage = () => {
    messages.splice(3, 0, message);
    setA({a: messages[0],b: messages[1],c: messages[2],d: messages[3],e: messages[4]})
    console.log(messages);
    setSend(true);
    setMessage("")
    setTimeout(() => {
      setResponse(true);
    }, 2000);

  };
  return (
    <><Head><title>Autera - Call</title></Head><div
          className={`callbg  flex  space-y-4 flex-col pt-[100px] w-full min-h-screen  items-center text-center`}
      >
          {!showCall &&
              <div
                  className={showCall
                      ? " transition-all fadeout  items-center flex justify-center"
                      : "transition-all fadein "}
              >
                  <h1 className="text-[3vw] mt-[15vw] font-semibold text-white">
                      Are You Ready For A Change Within?
                  </h1>
                  <h1 className="text-[3vw]  font-semibold text-[#6F61C0] ">
                      Talk Anonymously Now
                  </h1>
                  <div>
                      <button
                          type="button"
                          onClick={() => startcall()}
                          className="py-2 mt-4 px-16 transition-all rounded-3xl  hover:bg-[#685bb0] hover:text-white   text-[#6F61C0] bg-white font-semibold text-2xl"
                      >
                          Start Now
                      </button>
                  </div>
              </div>}
          {showCall && (
              <>
                  <div className="flex justiy-between items-center flex-row p-4 w-full space-x-2">
                      <div className="flex-col space-y-3 items-center w-[50vw] flex  p-3">
                          {spinner ? (
                              <>
                                  <Spinner color="default" />{" "}
                              </>
                          ) :!mutevideo ? (
                              <video className="ml-[5vw]" autoPlay muted loop>
                                  <source src="/extro.webm" type="video/mp4" />
                              </video>
                          ) : (
                              <>
                                  <div className="flex ml-[5vw] flex-col w-[31vw] h-[345px] bg-[#ffffff8d] rounded-xl text-gray-800 justify-center items-center">
                                      <svg
                                          width="177"
                                          height="177"
                                          viewBox="0 0 177 177"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M8 8L169 169M115.333 79.5556V70.6111L156.057 50.2536C157.421 49.5723 158.935 49.2507 160.458 49.3193C161.981 49.3879 163.46 49.8443 164.757 50.6454C166.053 51.4464 167.124 52.5655 167.866 53.8964C168.609 55.2273 168.999 56.7258 169 58.2499V118.75C169.001 120.614 168.419 122.431 167.337 123.948C166.254 125.465 164.725 126.606 162.963 127.212"
                                              stroke="#6F61C0"
                                              strokeWidth="15"
                                              stroke-linecap="round"
                                              stroke-linejoin="round" />
                                          <path
                                              d="M70.6111 34.8333H97.4444C102.189 34.8333 106.739 36.718 110.094 40.0728C113.449 43.4277 115.333 47.9778 115.333 52.7222V79.5555M115.333 115.333V124.278C115.333 129.022 113.449 133.572 110.094 136.927C106.739 140.282 102.189 142.167 97.4444 142.167H25.8889C21.1445 142.167 16.5944 140.282 13.2395 136.927C9.88472 133.572 8 129.022 8 124.278V52.7222C8 47.9778 9.88472 43.4277 13.2395 40.0728C16.5944 36.718 21.1445 34.8333 25.8889 34.8333H34.8333"
                                              stroke="#6F61C0"
                                              strokeWidth="15"
                                              stroke-linecap="round"
                                              stroke-linejoin="round" />
                                      </svg>
                                  </div>
                              </>
                          )}
                          {spinner ? (
                              <>
                                  <Spinner color="default" />{" "}
                              </>
                          ) : !mutevideo ? (
                              <video className="ml-[5vw]" autoPlay muted loop>
                                  <source src="/notextro.webm" type="video/mp4" />
                              </video>
                          ) : (
                              <>
                                  <div className="flex ml-[5vw] flex-col w-[31vw] h-[345px] bg-[#ffffff8d] rounded-xl text-gray-800 justify-center items-center">
                                      <svg
                                          width="177"
                                          height="177"
                                          viewBox="0 0 177 177"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M8 8L169 169M115.333 79.5556V70.6111L156.057 50.2536C157.421 49.5723 158.935 49.2507 160.458 49.3193C161.981 49.3879 163.46 49.8443 164.757 50.6454C166.053 51.4464 167.124 52.5655 167.866 53.8964C168.609 55.2273 168.999 56.7258 169 58.2499V118.75C169.001 120.614 168.419 122.431 167.337 123.948C166.254 125.465 164.725 126.606 162.963 127.212"
                                              stroke="#6F61C0"
                                              strokeWidth="15"
                                              stroke-linecap="round"
                                              stroke-linejoin="round" />
                                          <path
                                              d="M70.6111 34.8333H97.4444C102.189 34.8333 106.739 36.718 110.094 40.0728C113.449 43.4277 115.333 47.9778 115.333 52.7222V79.5555M115.333 115.333V124.278C115.333 129.022 113.449 133.572 110.094 136.927C106.739 140.282 102.189 142.167 97.4444 142.167H25.8889C21.1445 142.167 16.5944 140.282 13.2395 136.927C9.88472 133.572 8 129.022 8 124.278V52.7222C8 47.9778 9.88472 43.4277 13.2395 40.0728C16.5944 36.718 21.1445 34.8333 25.8889 34.8333H34.8333"
                                              stroke="#6F61C0"
                                              strokeWidth="15"
                                              stroke-linecap="round"
                                              stroke-linejoin="round" />
                                      </svg>
                                  </div>
                              </>
                          )}
                          <div className="flex flex-row space-x-3">
                              <svg
                                  className={"cursor-pointer"}
                                  width="71"
                                  height="71"
                                  viewBox="0 0 71 71"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <circle cx="35.5" cy="35.5" r="35.5" fill="white" />
                                  <path
                                      d="M35.8142 40.6313C34.3307 40.6313 33.0697 40.112 32.0312 39.0736C30.9927 38.0351 30.4735 36.7741 30.4735 35.2906V24.6091C30.4735 23.1256 30.9927 21.8646 32.0312 20.8261C33.0697 19.7877 34.3307 19.2684 35.8142 19.2684C37.2977 19.2684 38.5587 19.7877 39.5972 20.8261C40.6357 21.8646 41.1549 23.1256 41.1549 24.6091V35.2906C41.1549 36.7741 40.6357 38.0351 39.5972 39.0736C38.5587 40.112 37.2977 40.6313 35.8142 40.6313ZM34.034 53.0929V47.6187C30.9482 47.2033 28.3965 45.8236 26.3789 43.4796C24.3613 41.1357 23.3525 38.406 23.3525 35.2906H26.913C26.913 37.7532 27.7812 39.8527 29.5175 41.589C31.2538 43.3254 33.3527 44.1929 35.8142 44.1917C38.2769 44.1917 40.3763 43.3236 42.1127 41.5872C43.849 39.8509 44.7166 37.752 44.7154 35.2906H48.2758C48.2758 38.406 47.267 41.1357 45.2494 43.4796C43.2318 45.8236 40.6802 47.2033 37.5944 47.6187V53.0929H34.034Z"
                                      fill="#6F61C0" />
                              </svg>
                              <svg
                                  onClick={() => setshowCall(false)}
                                  className={"cursor-pointer"}
                                  width="72"
                                  height="71"
                                  viewBox="0 0 72 71"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <circle cx="36.146" cy="35.5" r="35.5" fill="white" />
                                  <g clip-path="url(#clip0_13_760)">
                                      <path
                                          d="M36.4601 18.2212C41.126 18.2212 45.6009 20.0747 48.9002 23.374C52.1995 26.6734 54.053 31.1482 54.053 35.8141C54.053 40.48 52.1995 44.9549 48.9002 48.2542C45.6009 51.5535 41.126 53.407 36.4601 53.407C31.7942 53.407 27.3193 51.5535 24.02 48.2542C20.7207 44.9549 18.8672 40.48 18.8672 35.8141C18.8672 31.1482 20.7207 26.6734 24.02 23.374C27.3193 20.0747 31.7942 18.2212 36.4601 18.2212ZM22.1659 35.8141C22.1659 39.6052 23.6719 43.241 26.3525 45.9217C29.0332 48.6024 32.669 50.1084 36.4601 50.1084C40.2512 50.1084 43.887 48.6024 46.5677 45.9217C49.2484 43.241 50.7544 39.6052 50.7544 35.8141C50.7544 32.023 49.2484 28.3872 46.5677 25.7066C43.887 23.0259 40.2512 21.5199 36.4601 21.5199C32.669 21.5199 29.0332 23.0259 26.3525 25.7066C23.6719 28.3872 22.1659 32.023 22.1659 35.8141ZM43.6732 30.9321L31.5781 43.0272C31.3765 43.2443 31.1201 43.403 30.8358 43.4866C30.5516 43.5702 30.2501 43.5756 29.963 43.5022C29.676 43.4288 29.4141 43.2794 29.2048 43.0696C28.9956 42.8598 28.8468 42.5975 28.7742 42.3103C28.7007 42.0236 28.7058 41.7224 28.789 41.4383C28.8722 41.1543 29.0304 40.8979 29.247 40.6961L41.3421 28.601C41.655 28.3098 42.0685 28.1513 42.4959 28.1587C42.9232 28.166 43.331 28.3388 43.6336 28.6406C43.9354 28.9432 44.1082 29.351 44.1156 29.7784C44.123 30.2057 43.9644 30.6192 43.6732 30.9321Z"
                                          fill="#6F61C0" />
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_13_760">
                                          <rect
                                              width="35.1858"
                                              height="35.1858"
                                              fill="white"
                                              transform="translate(18.8672 18.2212)" />
                                      </clipPath>
                                  </defs>
                              </svg>
                              <svg
                                  onClick={setmutevideo}
                                  className={"cursor-pointer"}
                                  width="72"
                                  height="71"
                                  viewBox="0 0 72 71"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <circle
                                      cx="35.792"
                                      cy="35.5"
                                      r="35.5"
                                      fill={mutevideo ? "gray" : "white"} />
                                  <path
                                      d="M45.3477 32.6333V25.9443C45.3477 25.4375 45.1463 24.9514 44.7879 24.593C44.4295 24.2346 43.9434 24.0332 43.4366 24.0332H20.5029C19.9961 24.0332 19.51 24.2346 19.1516 24.593C18.7931 24.9514 18.5918 25.4375 18.5918 25.9443V45.0557C18.5918 45.5626 18.7931 46.0487 19.1516 46.4071C19.51 46.7655 19.9961 46.9668 20.5029 46.9668H43.4366C43.9434 46.9668 44.4295 46.7655 44.7879 46.4071C45.1463 46.0487 45.3477 45.5626 45.3477 45.0557V38.3667L52.9922 46.0113V24.9888L45.3477 32.6333Z"
                                      fill="#6F61C0" />
                              </svg>
                          </div>
                      </div>
                      <div className="flex-col w-[35vw] fadein space-y-4 flex  p-3">
                          <div className="flex flex-row justify-between space-x-3">
                              <div className="flex flex-col items-center justify-center text-center">
                                  <h1 className="text-[2vw] text-white font-semibold">
                                      Anonymous #425
                                  </h1>
                              </div>
                              <div className="flex flex-col center justify-center text-center">
                                  <button
                                      type="button"
                                      className="py-2 mt-4 px-16  transition-all  hover:bg-[#685bb0] hover:text-white   text-[#6F61C0] bg-white text-xl"
                                  >
                                      Add Friend
                                  </button>
                              </div>
                          </div>
                          <div className="flex flex-col space-y-4 ">
                              <div className="flex flex-row justify-start">
                                  <div className="flex flex-col bg-[#685bb0] text-xl font-semibold w-[20vw] text-start rounded-xl px-2 py-4 text-white">
                                      {a.a}
                                  </div>
                              </div>
                              <div className="flex flex-row justify-end">
                                  <div className="flex flex-col bg-white text-xl font-semibold w-[20vw] text-start rounded-xl px-2 py-4 text-[#685bb0]">
                                      {a.b}
                                  </div>
                              </div>
                              <div className="flex flex-row justify-start">
                                  <div className="flex flex-col bg-[#685bb0] text-xl font-semibold w-[20vw] text-start rounded-xl px-2 py-4 text-white">
                                      {a.c}
                                  </div>
                              </div>
                              <div className="flex flex-row justify-end">
                                  {send && (
                                      <div className="flex flex-col fadein bg-white text-xl font-semibold w-[20vw] text-start rounded-xl px-2 py-4 text-[#685bb0]">
                                          {a.d}
                                      </div>
                                  )}
                              </div>
                              <div className="flex flex-row justify-start">
                                  {response && (
                                      <div className="flex flex-col fadein bg-[#685bb0] text-xl font-semibold w-[20vw] text-start rounded-xl px-2 py-4 text-white">
                                          {a.e}
                                      </div>
                                  )}
                              </div>
                          </div>
                          <div className="flex border bg-[#ffffffb5] justify-between rounded-2xl text-gray-600 text-lg flex-row p-2 space-x-2">
                              <input
                                  type="text"
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  placeholder="Enter text here..."
                                  className="text-2xl bg-transparent p-2 border-none w-[90%]" />
                              <svg
                                  width="43"
                                  onClick={() => sendmessage()}
                                  className="cursor-pointer"
                                  height="37"
                                  viewBox="0 0 43 37"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path
                                      d="M0 37V0L43 18.5L0 37ZM4.52632 30.0625L31.3447 18.5L4.52632 6.9375V15.0312L18.1053 18.5L4.52632 21.9688V30.0625Z"
                                      fill="#413B3B" />
                              </svg>
                          </div>
                      </div>
                  </div>
              </>
          )}
      </div></>
  );
}
