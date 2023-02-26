import './Dropdown.css'
export const Dropdown = (props) => {
    return (
        <div className='Dropdown'>
            <label>{props.label}</label>
            <select onChange={e => props.onChanged(e.target.value)} required={props.required} value={props.value}>
                <option value=''/>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}