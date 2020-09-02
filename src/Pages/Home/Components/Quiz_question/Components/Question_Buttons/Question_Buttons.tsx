import React from 'react'

import classes from './Question_Buttons.module.css'

const Question_Buttons = () => {

    return (

        <div className={classes.container}>
            
            <button className={classes.button} style={{backgroundColor:"#f2b195"}}>Back</button>
            <button className={classes.button} style={{backgroundColor:"#c2e2c3"}}>Next</button>

        </div>

    )

}

export default Question_Buttons