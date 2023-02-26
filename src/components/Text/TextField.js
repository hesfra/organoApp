import './TextField.css'
export const TextField = (props) =>{

    const onDigit = (e) =>{
        props.onChanged(e.target.value)
    }
    
return(
    <div className="textField">
        <label>{props.label}</label>
        <input value={props.value} onChange={onDigit} required={props.required} placeholder={props.placeholder}/>
    </div>
)
}