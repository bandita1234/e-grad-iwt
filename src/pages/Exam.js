import React,{useContext} from "react";
import ExamGuide from "../components/ExamGuide";
import ExamSub from "../components/ExamSub";
import Quiz from "../components/Quiz";
import { ExamContext } from "../state/ExamState";

const Exam = () => {
  const exam = useContext(ExamContext)
  return (
    <div>
    {exam.stage===0 && <ExamGuide/>}
    {exam.stage===1 && <ExamSub/>}
    {exam.stage===2 && <Quiz/>}

    </div>
  );
};

export default Exam;
