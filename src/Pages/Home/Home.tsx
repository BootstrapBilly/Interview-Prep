import React, { useState } from 'react'

import classes from './Home.module.css'

//components
import QuizQuestion from "./Components/Quiz_question/Quiz_question"

const Home = () => {

    const [current_question, set_current_question] = useState<number>(1)//hold the current question number

    return (

        <div className={classes.container}>

            <h1 className={classes.title}>Interview Questions</h1>

            <h3 className={classes.sub_title}>{`Question ${current_question} of 10`}</h3>

            <QuizQuestion />
            
        </div>

    )

}

export default Home