import React from 'react'
import classes from './Quiz_question.module.css'

//components
import Answer from "./Components/Answer/Answer"
import QuestionButtons from "./Components/Question_Buttons/Question_Buttons"

const Quiz_question = () => {

    return (

        <div className={classes.container}>

            <h4 className={classes.title}>What is event hoisting ?</h4>

            <div className={classes.answers_container}>

                {[1, 2, 3, 4].map(item => <Answer />)}

            </div>

            <QuestionButtons />
        </div>

    )

}

export default Quiz_question

