import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useUser } from '@clerk/nextjs';
import Head from "next/head";

export default function quizes({ setUserProfile, userProfile }) {
    const { user  } = useUser();

  const [showQuiz, setShowQuiz] = useState(false);
  const [showresults, setShowresults] = useState(false);
  const quiz = [
    { image: "/1.png", answer: "happy" },
    { image: "/2.png", answer: "sad" },
    { image: "/3.png", answer: "neutral" },
    { image: "/4.png", answer: "angry" },
    { image: "/5.png", answer: "sad" },
    { image: "/6.png", answer: "angry" },
    { image: "/7.png", answer: "happy" },
    { image: "/8.png", answer: "happy" },
    { image: "/9.png", answer: "angry" },
    { image: "/10.png", answer: "neutral" },
  ];
  const [option, setOption] = useState(null);
  const next = () => {
    if (quiz[pageid].answer === option) {
      setUserProfile({
        questions: quiz.length,
        correct: userProfile.correct + 1,
      });
      console.log("correct");
    } else {
      setUserProfile({ questions: quiz.length, correct: userProfile.correct });
      console.log("incorrect");
    }
    setOption(null);
    setPageid(pageid + 1);
  };
  const submit = () => {
    setShowresults(true);
    setOption(null);
    setPageid(0);
    page = 0;
  };
  const [pageid, setPageid] = useState(0);
  useEffect(() => {
    setShowresults(false);
    setOption(null);
    setPageid(0);
    page = 0;
  }, []);

  let page = 0;
  return (
    <><Head><title>Autera - Quiz</title></Head><div
      className={`quizbg flex  space-y-4 flex-col pt-[100px] w-full min-h-screen  items-center text-center`}
    >
    {!showQuiz &&
    
      <div
        className={showQuiz
          ? " transition-all fadeout  items-center flex justify-center"
          : "transition-all fadein "}
      >
        <h1 className="text-[3vw] mt-[15vw] font-semibold text-white">
          Are You Ready For Another
        </h1>
        <h1 className="text-[3vw]  font-semibold text-[#6F61C0] ">
          Exciting <span className="text-white">Questionnaire?</span>
        </h1>
        <div>
          <button
            type="button"
            onClick={() => setShowQuiz(true)}
            className="py-3 px-16  transition-all   text-white rounded-3xl   bg-[#6F61C0]  text-2xl"
          >
            Play Now
          </button>
        </div>
      </div>
     }
      <div
        className={`${showQuiz
            ? " w-full  fadein flex justify-center items-center"
            : "w-0 fadeout translate-y-0"} transition-all`}
      >
        <div className="flex-col items-center justify-center flex p-4 space-y-4">
          {showresults ? (
            <>
              <div className="flex fadein flex-col mt-[5vw] space-y-3">
                <h1 className=" text-white text-center font-bold text-[3vw]">
                  Congratulations! Your Performance
                </h1>
                <h1 className=" text-[#866FCD] text-center font-bold text-[4vw]">
                  Awesome
                </h1>
                <div className="flex flex-row items-center space-x-5 justify-center">
                  <div className="flex flex-col mt-3 space-y-6 text-[#866FCD] font-semibold text-5xl">
                    <Image src={user.imageUrl} width={200} height={200} />
                    {user.firstName}
                  </div>
                  <Image src={"/results.png"} width={400} height={400} />
                </div>
                <div className="flex flex-row justify-center items-center space-x-8">
                  <div className="flex flex-col space-y-3 p-4">
                    <h2 className=" text-white text-center font-semibold text-[2vw]">
                      Questions
                    </h2>
                    <h2 className=" text-[#866FCD] text-center font-semibold text-[2vw]">
                      {quiz.length}
                    </h2>
                  </div>
                  <div className="flex flex-col space-y-3 p-4">
                    <h2 className=" text-white text-center font-semibold text-[2vw]">
                      Correct
                    </h2>
                    <h2 className=" text-[#866FCD] text-center font-semibold text-[2vw]">
                      {userProfile.correct}
                    </h2>
                  </div>
                  <div className="flex flex-col space-y-3 p-4">
                    <h2 className=" text-white text-center font-semibold text-[2vw]">
                      Points
                    </h2>
                    <h2 className=" text-[#866FCD] text-center font-semibold text-[2vw]">
                      {Math.round((quiz.length + userProfile.correct) / 2)}
                    </h2>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="py-2 mt-4 px-16  transition-all  hover:bg-[#685bb0] hover:text-white   text-[#6F61C0] bg-white text-2xl"
              >
                <Link href={"/"}>Go to Dashboard</Link>
              </button>
            </>
          ) : (
            <>
              <div>
                <Image
                  src={quiz[pageid].image}
                  className="fadein"
                  width={600}
                  height={600} />
              </div>
              <div>
                <h1 className="text-[1.8vw] text-white font-semibold">
                  Which option best signifies the emotion shown above?
                </h1>
              </div>
              <div className="flex text-[#866FCD] flex-col space-y-2">
                <div className="flex flex-row space-x-2">
                  <div
                    onClick={() => {
                      setOption("angry");
                    } }
                    className={` ${option === "angry"
                        ? "text-white bg-[#6F61C0]"
                        : "bg-white"} cursor-pointer font-semibold  items-center  transition-all  flex text-2xl border border-black w-[20vw] rounded-xl p-2`}
                  >
                    <svg
                      width="52"
                      height="52"
                      className="mr-4"
                      viewBox="0 0 62 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8837 41.5L28.9397 19.004H32.4917L41.5157 41.5H36.8757L29.8997 23.036H31.4997L24.4277 41.5H19.8837ZM24.6837 37.308V33.66H36.7797V37.308H24.6837Z"
                        fill="#6F61C0" />
                      <circle
                        cx="31"
                        cy="31"
                        r="29.5"
                        stroke="#6F61C0"
                        strokeWidth="3" />
                    </svg>
                    Angry
                  </div>
                  <div
                    onClick={() => {
                      setOption("neutral");
                    } }
                    className={` ${option === "neutral"
                        ? "text-white bg-[#6F61C0]"
                        : "bg-white"} cursor-pointer font-semibold  items-center  transition-all  flex text-2xl border border-black w-[20vw] rounded-xl p-2`}
                  >
                    <svg
                      width="52"
                      className="mr-4"
                      height="52"
                      viewBox="0 0 62 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.0914 41.5V37.948H31.9474C32.9927 37.948 33.8034 37.628 34.3794 36.988C34.9767 36.348 35.2754 35.5907 35.2754 34.716C35.2754 34.1187 35.1474 33.5747 34.8914 33.084C34.6354 32.5933 34.2514 32.2093 33.7394 31.932C33.2487 31.6333 32.6514 31.484 31.9474 31.484H26.0914V27.964H31.4674C32.3634 27.964 33.0781 27.74 33.6114 27.292C34.1661 26.844 34.4434 26.172 34.4434 25.276C34.4434 24.3587 34.1661 23.676 33.6114 23.228C33.0781 22.78 32.3634 22.556 31.4674 22.556H26.0914V19.004H31.9794C33.4727 19.004 34.7207 19.2813 35.7234 19.836C36.7474 20.3693 37.5154 21.084 38.0274 21.98C38.5394 22.8547 38.7954 23.8147 38.7954 24.86C38.7954 26.14 38.4007 27.2493 37.6114 28.188C36.8434 29.1053 35.7127 29.788 34.2194 30.236L34.4114 28.828C36.0754 29.2973 37.3554 30.076 38.2514 31.164C39.1687 32.2307 39.6274 33.5213 39.6274 35.036C39.6274 36.2307 39.3287 37.3187 38.7314 38.3C38.1554 39.26 37.3021 40.0387 36.1714 40.636C35.0621 41.212 33.7074 41.5 32.1074 41.5H26.0914ZM22.8914 41.5V19.004H27.2114V41.5H22.8914Z"
                        fill="#6F61C0" />
                      <circle
                        cx="31"
                        cy="31"
                        r="29.5"
                        stroke="#6F61C0"
                        strokeWidth="3" />
                    </svg>
                    Neutral
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div
                    onClick={() => {
                      setOption("happy");
                    } }
                    className={` ${option === "happy"
                        ? "text-white bg-[#6F61C0]"
                        : "bg-white"} cursor-pointer font-semibold  items-center  transition-all  flex text-2xl border border-black w-[20vw] rounded-xl p-2`}
                  >
                    <svg
                      width="52"
                      height="52"
                      className="mr-4"
                      viewBox="0 0 62 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.4484 41.82C30.8057 41.82 29.2804 41.532 27.8724 40.956C26.4644 40.3587 25.2271 39.5373 24.1604 38.492C23.1151 37.4253 22.3044 36.188 21.7284 34.78C21.1737 33.372 20.8964 31.8573 20.8964 30.236C20.8964 28.6147 21.1737 27.1 21.7284 25.692C22.3044 24.284 23.1151 23.0573 24.1604 22.012C25.2271 20.9667 26.4537 20.1453 27.8404 19.548C29.2484 18.9507 30.7844 18.652 32.4484 18.652C34.2404 18.652 35.8191 18.9507 37.1844 19.548C38.5497 20.124 39.7551 20.924 40.8004 21.948L37.8564 24.892C37.2377 24.2093 36.4804 23.676 35.5844 23.292C34.6884 22.908 33.6431 22.716 32.4484 22.716C31.4031 22.716 30.4431 22.8973 29.5684 23.26C28.7151 23.6013 27.9684 24.1133 27.3284 24.796C26.6884 25.4573 26.1977 26.2573 25.8564 27.196C25.5151 28.1133 25.3444 29.1267 25.3444 30.236C25.3444 31.3667 25.5151 32.3907 25.8564 33.308C26.1977 34.2253 26.6884 35.0253 27.3284 35.708C27.9684 36.3693 28.7151 36.8813 29.5684 37.244C30.4431 37.6067 31.4031 37.788 32.4484 37.788C33.7071 37.788 34.7844 37.596 35.6804 37.212C36.5977 36.828 37.3657 36.284 37.9844 35.58L40.9284 38.524C39.8831 39.5693 38.6671 40.38 37.2804 40.956C35.8937 41.532 34.2831 41.82 32.4484 41.82Z"
                        fill="#6F61C0" />
                      <circle
                        cx="31"
                        cy="31"
                        r="29.5"
                        stroke="#6F61C0"
                        strokeWidth="3" />
                    </svg>
                    Happy
                  </div>
                  <div
                    onClick={() => {
                      setOption("sad");
                    } }
                    className={` ${option === "sad" ? "text-white bg-[#6F61C0]" : "bg-white"} cursor-pointer font-semibold  items-center  transition-all  flex text-2xl border border-black w-[20vw] rounded-xl p-2`}
                  >
                    <svg
                      width="52"
                      height="52"
                      className="mr-4"
                      viewBox="0 0 62 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.008 41.5V37.628H29.736C31.1867 37.628 32.456 37.3293 33.544 36.732C34.632 36.1133 35.4747 35.2493 36.072 34.14C36.6907 33.0307 37 31.7187 37 30.204C37 28.732 36.6907 27.452 36.072 26.364C35.4534 25.2547 34.6 24.4013 33.512 23.804C32.424 23.1853 31.1654 22.876 29.736 22.876H23.912V19.004H29.8C31.464 19.004 33 19.2813 34.408 19.836C35.8374 20.3907 37.0747 21.18 38.12 22.204C39.1867 23.2067 40.008 24.3907 40.584 25.756C41.1814 27.1213 41.48 28.6147 41.48 30.236C41.48 31.8573 41.1814 33.3613 40.584 34.748C40.008 36.1133 39.1974 37.308 38.152 38.332C37.1067 39.3347 35.8694 40.1133 34.44 40.668C33.032 41.2227 31.5067 41.5 29.864 41.5H24.008ZM21.032 41.5V19.004H25.384V41.5H21.032Z"
                        fill="#6F61C0" />
                      <circle
                        cx="31"
                        cy="31"
                        r="29.5"
                        stroke="#6F61C0"
                        strokeWidth="3" />
                    </svg>
                    Sad
                  </div>
                </div>
                <div>
                  {pageid < quiz.length - 1 ? (
                    <>
                      {option ? (
                        <button
                          type="button"
                          className="py-2 mt-4 px-16  transition-all  hover:bg-[#685bb0] hover:text-white   text-[#6F61C0] bg-white text-xl"
                          onClick={() => next()}
                        >
                          Next
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="py-2 mt-4 px-16 cursor-default  transition-all  disabled   text-[#6F61C0] bg-white text-xl"
                        >
                          Next
                        </button>
                      )}
                    </>
                  ) : (
                    <>
                      {option ? (
                        <button
                          type="button"
                          className="py-2 mt-4 px-16  transition-all  hover:bg-[#685bb0] hover:text-white   text-[#6F61C0] bg-white text-xl"
                          onClick={() => submit()}
                        >
                          Finish
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="py-2 mt-4 px-16 cursor-default  transition-all  disabled   text-[#6F61C0] bg-white text-xl"
                        >
                          Finish
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div></>
  );
}
