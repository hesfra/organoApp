import './Person.css';
import {AiFillCloseCircle} from 'react-icons/ai';

export const Person = ({name, image, office, id, color ,onDelete}) => {
    return (
        <div className='person'>
            <AiFillCloseCircle size={25} className='delete' onClick={() => onDelete(id)}/>
            <div className='cabecalho' style={{backgroundColor:color}}>
            <img src={image} alt={name}/>
            </div>
            <div className='rodape'>
            <h4>{name}</h4>
            <h5>{office}</h5>
            </div>
        </div>
    )
}