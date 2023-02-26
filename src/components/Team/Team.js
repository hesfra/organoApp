import Person from '../Person';
import './Team.css';

export const Team = (props) => {
    return (
        (props.morePerson.length > 0) ? <section className='team' style={{ backgroundColor: props.secundaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.teamName}</h3>
            <div className='person'>
                {props.morePerson.map(person => <Person primaryColor={props.primaryColor} key={person.name} name={person.name} office={person.office} image={person.image} />)}
            </div>
        </section>
        :''
    )
}