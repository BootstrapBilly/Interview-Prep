import React from 'react'

import classes from './Question_Buttons.module.css'

type Props = {
    answer_selected: string,
    handle_back_click: (event: React.MouseEvent<HTMLButtonElement>) => void
    handle_next_click: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Question_Buttons = ({ answer_selected, handle_back_click, handle_next_click }: Props) => {

    return (

        <div className={classes.container}>

            <button

                className={classes.button}
                style={{ backgroundColor: "#f2b195" }}
                onClick={handle_back_click}>
                    
                    {"Back"/* Text content*/}

            </button>

            <button

                className={[classes.button, classes.next_button].join(" ")}
                style={{ backgroundColor: "#c2e2c3", display: answer_selected ? "block" : "none" }}
                onClick={handle_next_click}>
                    
                    {"Next"/* Text content*/}

            </button>

        </div>

    )

}

export default Question_Buttons