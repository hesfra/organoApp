import Person from '../Person';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

export const Team = ({team, morePerson, onDelete, changeColor}) => {
    return (
        (morePerson.length > 0) ? <section className='team' style={{ backgroundColor: hexToRgba(team.color, 0.6) }}>
            <input onChange={e => changeColor(e.target.value, team.id)} value={team.color} type='color' className='input-color'/>
            <h3 style={{ borderColor: team.color }}>{team.name}</h3>
            <div className='person'>
                {morePerson.map(person => <Person color={team.color} key={person.id} name={person.name} office={person.office} image={person.image} />)}
            </div>
        </section>
        :''
    )
}