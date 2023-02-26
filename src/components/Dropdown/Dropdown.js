import './Dropdown.css'
export const Dropdown = (props) => {
    return (
        <div className='Dropdown'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}