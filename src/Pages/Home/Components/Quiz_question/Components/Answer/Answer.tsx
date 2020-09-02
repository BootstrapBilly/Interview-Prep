import React from 'react'
import classes from './Answer.module.css'

//=Types
type Props = { 
    answer: string,
    handle_select_answer:(event: React.MouseEvent<HTMLDivElement>) => void,
    answer_selected:string
 }

const Answer = ({ answer, handle_select_answer, answer_selected }: Props) => {

    return (

        <div className={classes.container} onClick={handle_select_answer} style={{backgroundColor:answer_selected === answer ? "rgb(168, 215, 252)" : undefined}}>

            {answer}

        </div>

    )

}

export default Answer