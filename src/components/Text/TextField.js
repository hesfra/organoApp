import { useState } from 'react'
import './TextField.css'
export const TextField = (props) =>{
 
    const [value, setValue] = useState('')

    const onDigit = (e) =>{
        setValue = e.target.value
        console.log(value)
    }
    
return(
    <div className="textField">
        <label>{props.label}</label>
        <input onChange={onDigit} required={props.required} placeholder={props.placeholder}/>
    </div>
)
}