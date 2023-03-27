import { createContext } from "react";
import React, { useState } from "react";

export const ExamContext = createContext();

const ExamState = (props) => {
  const [stage, setStage] = useState(0);
  const [subject, setSubject] = useState();
  const [res, setRes] = useState([]);
  const startExam = (sub) =>{
    setSubject(sub);
  }
  const incStage = () => {
    setStage(stage + 1);
  };
  const addRes = (opt) => {
    setRes([...res, opt])
  };
  const updateRes = (idx,opt) => {
    let tmp=JSON.parse(JSON.stringify(res));
    tmp[idx] = opt;
    setRes(tmp);
  }; 
  return (
    <ExamContext.Provider value={{ stage, incStage,subject,startExam,res, addRes,updateRes }}>
      {props.children}
    </ExamContext.Provider>
  );
};

export default ExamState;
