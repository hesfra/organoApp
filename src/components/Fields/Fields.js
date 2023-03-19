import './Fields.css'
export const Fields = ({label, placeholder, value, onChanged, required = false, type='text'} ) =>{

    const onDigit = (e) =>{
        onChanged(e.target.value)
    }
    
return(
    <div className={`Fields field${type}`}>
        <label>{label}</label>
        <input type={type}
        value={value}
        onChange={onDigit}
        required={required}
        placeholder={placeholder}/>
    </div>
)
}