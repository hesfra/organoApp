import Person from '../Person';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

export const Team = (props) => {
    return (
        (props.morePerson.length > 0) ? <section className='team' style={{ backgroundColor: hexToRgba(props.color, 0.6) }}>
            <input onChange={e => props.changeColor(e.target.value, props.teamName)} value={props.color} type='color' className='input-color'/>
            <h3 style={{ borderColor: props.color }}>{props.teamName}</h3>
            <div className='person'>
                {props.morePerson.map(person => <Person color={props.color} key={person.name} name={person.name} office={person.office} image={person.image} />)}
            </div>
        </section>
        :''
    )
}