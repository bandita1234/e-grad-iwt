import { createContext } from "react";
import React, { useState } from "react";

export const ExamContext = createContext();

const ExamState = (props) => {
  const [stage, setStage] = useState(0);
  const [subject, setSubject] = useState();
  const startExam = (sub) =>{
    setSubject(sub);
  }
  const incStage = () => {
    setStage(stage + 1);
  };
  return (
    <ExamContext.Provider value={{ stage, incStage,subject,startExam }}>
      {props.children}
    </ExamContext.Provider>
  );
};

export default ExamState;
