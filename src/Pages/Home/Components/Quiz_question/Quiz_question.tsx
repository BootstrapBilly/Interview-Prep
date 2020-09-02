import React, { useState, useEffect } from 'react'
import classes from './Quiz_question.module.css'

//components
import Answer from "./Components/Answer/Answer"
import QuestionButtons from "./Components/Question_Buttons/Question_Buttons"

//functions
import { randomize_array } from "../../../../Util/randomize_array"

//=Types
type question_details = {

    question: string,
    all_answers: string[],
    correct_answer: string

}

type Props = {

    question_details: question_details,
    handle_back_click: (event: React.MouseEvent<HTMLButtonElement>) => void
    handle_next_click: (event: React.MouseEvent<HTMLButtonElement>) => void

}


const Quiz_question = ({ question_details, handle_back_click, handle_next_click }: Props) => {

    //*states
    const [answer_selected, set_answer_selected] = useState<string>("")//Show the next button or not depending on if they have selected an answer
    const [randomized_answers, set_randomized_answers] = useState<string[]>([])//hold all answers, jumbled up so its not too easy

    //!effects
    //This effect is used to jumble the order of the possible answers upon first render, it is only called once
    useEffect(() => { if (!answer_selected) set_randomized_answers(randomize_array(question_details.all_answers)) }, [])

    //_functions
    const handle_select_answer = (e: React.MouseEvent<HTMLDivElement>) => {

        console.log(e.currentTarget.innerHTML)
        set_answer_selected(e.currentTarget.innerHTML)

    }

    return (

        <div className={classes.container}>

            <h4 className={classes.title}>{question_details.question} ?</h4>

            <div className={classes.answers_container}>

                {randomized_answers.map(answer => <Answer answer={answer} handle_select_answer={(e) => handle_select_answer(e)} answer_selected={answer_selected} />)}

            </div>

            <QuestionButtons

                answer_selected={answer_selected}
                handle_back_click={handle_back_click}
                handle_next_click={handle_next_click}

            />

        </div>

    )

}

export default Quiz_question

