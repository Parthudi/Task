import React from 'react'
import './formInput.css'

const FormInput = (props) => {

   const formlabel = (
         props.lableType ? "lableType" : "forminputlabel"
        )
    return(                     
        <div className="group">
            <input className="forminput" onChange={props.handleChange} autoComplete="off" {...props}/>
            {
               props.labal ? 
               ( <label className={`${props.value.length  ? ["shrink" ] : ''}  ${formlabel}`}>
               {props.labal}
             </label> ) : null
            }
        </div>      
    )
}


export default FormInput

// ${[classes.forminputlabel, classes[props.lableType]].join(' ')}`}