import React, { useContext, useEffect, useState } from 'react'
import { quiz } from "../data/questions";
import { ExamContext } from "../state/ExamState";
const ExamResult = () => {
  const exam = useContext(ExamContext);
  const [ques, setQues] = useState();
  const calcRes = (tmp) => {
    // console.log(tmp[0].questions,exam.res);
    let sc = 0;
    exam && exam.res.map((idx,element) => {
      if(tmp[0].questions[idx].choices[tmp[0].questions[idx].correctAnswer] === element ){
        sc+=1;
      }
    });
    exam.setScore(sc);
    console.log(sc);
  }
  useEffect(() => {
    const tmp = quiz.filter((q) => q.topic===exam.subject);
    setQues([...tmp]);
    calcRes(tmp);
  }, []);
  return (
    <div className="bg-emerald-100 h-screen lg:py-10 lg:px-20 flex justify-center items-center">
    <div className="bg-emerald-200 w-full sm:w-1/2 p-8 space-y-4 rounded-md">
    {exam && <h1>Your Total Score is : {exam.score}</h1>}
    <p></p>
    </div>
    </div>
  )
}

export default ExamResult