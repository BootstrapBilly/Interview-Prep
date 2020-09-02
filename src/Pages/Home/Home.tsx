import React, { useState } from 'react'

import classes from './Home.module.css'

//components
import QuizQuestion from "./Components/Quiz_question/Quiz_question"

//data
import { data } from '../../Data/Data'

const Home = () => {

    //*states
    const [current_question, set_current_question] = useState(1)//hold the current question number
    const [selected_answers, set_selected_answers] = useState([])//state to hold all user selected answers

    return (

        <div className={classes.container}>

            <h1 className={classes.title}>Interview Questions</h1>

            <h3 className={classes.sub_title}>{`Question ${current_question} of ${data.length}`}</h3>

            <QuizQuestion

                question_details={data[current_question - 1]}
                handle_back_click={()=> current_question >= 2 && set_current_question(current_question - 1)}
                handle_next_click={()=> set_current_question(current_question + 1) }

            />

        </div>

    )

}

export default Home