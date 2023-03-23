import React, { useContext, useEffect, useState } from "react";
import { quiz } from "../data/questions";
import { ExamContext } from "../state/ExamState";
import Timer from "../components/Timer";

const Quiz = () => {
  const [ques, setQues] = useState();
  const [idx, setIdx] = useState(0);
  const exam = useContext(ExamContext);
  useEffect(() => {
    const tmp = quiz.filter((q) => q.topic === exam.subject);
    setQues([...tmp]);
  }, []);
  console.log(ques);

  const handlePrev = () => {
    if (idx > 0) setIdx(idx - 1);
  };
  const handleNext = () => {
    if (idx !== ques[0].totalQuestions - 1) setIdx(idx + 1);
  };
  const submitExam = () => {
    exam.incStage();
  }
  return (
    <div className="bg-emerald-100 h-screen lg:py-10 lg:px-20 flex justify-center items-center">
    <div className="bg-emerald-200 w-full sm:w-1/2 p-8 space-y-4 rounded-md">
    <div><Timer/></div>
      <div className="">
        <p className="text-2xl font-bold"><span>{idx+1}.  </span>{ques && ques[0].questions[idx].question}</p>
      </div>
      <div>
        <div className="border-2 border-white hover:bg-blue-200 p-2 my-3">
          <input
            type="radio"
            name={ques && ques[0].questions[idx].choices[0]}
            id="0"
          />
          <label htmlFor="0">{ques && ques[0].questions[idx].choices[0]}</label>
        </div>
        <div className="border-2 border-white hover:bg-blue-200 p-2 my-3">
          <input
            type="radio"
            name={ques && ques[0].questions[idx].choices[1]}
            id="1"
          />
          <label htmlFor="1">{ques && ques[0].questions[idx].choices[1]}</label>
        </div>
        <div className="border-2 border-white hover:bg-blue-200 p-2 my-3">
          <input
            type="radio"
            name={ques && ques[0].questions[idx].choices[2]}
            id="2"
          />
          <label htmlFor="2">{ques && ques[0].questions[idx].choices[2]}</label>
        </div>
        <div className="border-2 border-white hover:bg-blue-200 p-2 my-3">
          <input
            type="radio"
            name={ques && ques[0].questions[idx].choices[3]}
            id="3"
          />
          <label htmlFor="3">{ques && ques[0].questions[idx].choices[3]}</label>
        </div>
      </div>
      <div>
        {ques&& idx !== 0&&<button onClick={handlePrev} className="bg-emerald-400 my-8 py-2 px-4 mx-2 rounded-md text-white font-semibold">Prev</button>}
        {ques&& idx !== ques[0].totalQuestions - 1&&<button onClick={handleNext} className="bg-emerald-400 my-8 py-2 px-4 rounded-md text-white font-semibold">Next</button>}
        {ques&& idx === ques[0].totalQuestions - 1&&<button onClick={submitExam} className="bg-emerald-400 my-8 py-2 px-4 rounded-md text-white font-semibold">Submit</button>}
      </div>
      </div>
    </div>
  );
};

export default Quiz;
