import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function quizes({ setUserProfile, userProfile }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showresults, setShowresults] = useState(false);
  const quiz = [
    { image: "1.png", answer: "angry" },
    { image: "2.png", answer: "" },
    { image: "3.png", answer: "" },
    { image: "4.png", answer: "" },
    { image: "5.png", answer: "" },
    { image: "6.png", answer: "" },
    { image: "7.png", answer: "" },
    { image: "8.png", answer: "" },
    { image: "9.png", answer: "" },
    { image: "10.png", answer: "" },
  ];
  const [option, setOption] = useState(null);
  const next = () => {
    if (quiz[pageid].answer === option) {
      setUserProfile({ questions: pageid, correct: userProfile.correct + 1 });
    }
    setUserProfile({ questions: pageid, correct: userProfile.correct });
    setOption(null);
    setPageid(pageid + 1);
    console.log(pageid);
    console.log(userProfile);
  };
  const submit = () => {
    setShowresults(true);
    setOption(null);
    setPageid(0);
    page = 0;
  };
  const [pageid, setPageid] = useState(0);
  let page = 0;
  return (
    <div
      className={`quizbg flex  space-y-4 flex-col pt-[100px] w-full min-h-screen  items-center text-center`}
    >
      <div
        className={
          showQuiz ? " transition-all fadeout  " : "transition-all fadein "
        }
      >
        <h1 className="text-[3vw] mt-24 font-semibold text-[#6F61C0]">
          Start the Quiz
        </h1>
        <div>
          <button
            type="button"
            onClick={() => setShowQuiz(true)}
            className="py-2 px-10  transition-all   text-white   bg-[#6F61C0]  text-lg"
          >
            Try Now
          </button>
        </div>
      </div>
      <div
        className={`${
          showQuiz
            ? " w-full  fadein flex justify-center items-center"
            : "w-0 fadeout translate-y-0"
        } transition-all`}
      >
        <div className="flex-col items-center justify-center flex p-4 space-y-4">
          {showresults ? (
            <><div className="flex fadein flex-col mt-[10vw] space-y-3">
                          <h1 className="text-[#866FCD] text-start font-bold text-[4vw]">Well Done!</h1>
                          <h2 className="text-[#866FCD] text-start font-semibold text-[2vw]">Questions Answered: {userProfile.questions + 1}</h2>
                          <h2 className="text-[#866FCD] text-start font-semibold text-[2vw]">Correct Answers: {userProfile.correct}</h2>
                      </div><button
                          type="button"
                          className="py-2 mt-4 px-16  transition-all  hover:bg-[#685bb0] hover:text-white   text-[#6F61C0] bg-white text-xl"

                      >
                      <Link href={"/"}>

                              Go to Dashboard
                      </Link>
                          </button></>
          ) : (
            <>
              <div>
                {/* quiz[pageid] */}
                <Image src={""} className="fadein" width={300} height={300} />
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
                    }}
                    className={` ${
                      option === "angry"
                        ? "text-white bg-[#6F61C0]"
                        : "bg-white"
                    } cursor-pointer  transition-all  flex text-2xl border border-black w-[20vw] rounded-xl p-3`}
                  >
                    Angry
                  </div>
                  <div
                    onClick={() => {
                      setOption("sad");
                    }}
                    className={` ${
                      option === "sad" ? "text-white bg-[#6F61C0]" : "bg-white"
                    } cursor-pointer  transition-all  flex text-2xl border border-black w-[20vw] rounded-xl p-3`}
                  >
                    Sad
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div
                    onClick={() => {
                      setOption("happy");
                    }}
                    className={` ${
                      option === "happy"
                        ? " text-white bg-[#6F61C0]"
                        : "bg-white"
                    } cursor-pointer  transition-all  flex text-2xl border border-black w-[20vw] rounded-xl p-3`}
                  >
                    Happy
                  </div>
                  <div
                    onClick={() => {
                      setOption("neutral");
                    }}
                    className={` ${
                      option === "neutral"
                        ? "text-white bg-[#6F61C0]"
                        : "bg-white"
                    } cursor-pointer  transition-all  flex text-2xl border border-black w-[20vw] rounded-xl p-3`}
                  >
                    Neutral
                  </div>
                </div>
                <div>
                  {pageid < quiz.length ? (
                    <>
                    {option? 
                      <button
                        type="button"
                        className="py-2 mt-4 px-16  transition-all  hover:bg-[#685bb0] hover:text-white   text-[#6F61C0] bg-white text-xl"
                        onClick={() => next()}
                      >
                        Next
                      </button>

                    :
                      <button
                        type="button"
                        className="py-2 mt-4 px-16 cursor-default  transition-all  disabled   text-[#6F61C0] bg-white text-xl"
                        
                      >
                        Next
                      </button>
                    }
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="py-2 mt-4 px-16  transition-all  hover:bg-[#685bb0] hover:text-white   text-[#6F61C0] bg-white text-xl"
                        onClick={() => submit()}
                      >
                        Finish
                      </button>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
