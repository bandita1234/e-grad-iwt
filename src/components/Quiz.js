import React, { useContext, useEffect, useState } from "react";
import { quiz } from "../data/questions";
import { ExamContext } from "../state/ExamState";

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
    <div>
      <div>
        <p><span>{idx+1}.  </span>{ques && ques[0].questions[idx].question}</p>
      </div>
      <div>
        <div>
          <input
            type="radio"
            name={ques && ques[0].questions[idx].choices[0]}
            id="0"
          />
          <label htmlFor="0">{ques && ques[0].questions[idx].choices[0]}</label>
        </div>
        <div>
          <input
            type="radio"
            name={ques && ques[0].questions[idx].choices[1]}
            id="1"
          />
          <label htmlFor="1">{ques && ques[0].questions[idx].choices[1]}</label>
        </div>
        <div>
          <input
            type="radio"
            name={ques && ques[0].questions[idx].choices[2]}
            id="2"
          />
          <label htmlFor="2">{ques && ques[0].questions[idx].choices[2]}</label>
        </div>
        <div>
          <input
            type="radio"
            name={ques && ques[0].questions[idx].choices[3]}
            id="3"
          />
          <label htmlFor="3">{ques && ques[0].questions[idx].choices[3]}</label>
        </div>
      </div>
      <div>
        {ques&& idx !== 0&&<button onClick={handlePrev}>Prev</button>}
        {ques&& idx !== ques[0].totalQuestions - 1&&<button onClick={handleNext}>Next</button>}
        {ques&& idx === ques[0].totalQuestions - 1&&<button onClick={submitExam}>Submit</button>}
      </div>
    </div>
  );
};

export default Quiz;
