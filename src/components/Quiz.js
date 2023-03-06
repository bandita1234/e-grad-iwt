import React, { useContext } from 'react'
import {quiz} from '../data/questions'
import { ExamContext } from '../state/ExamState'

const Quiz = () => {
    const exam = useContext(ExamContext)
    
  return (
    <div>
{exam.subject}
    </div>
  )
}

export default Quiz