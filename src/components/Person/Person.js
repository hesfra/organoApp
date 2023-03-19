import './Person.css';
import {AiFillCloseCircle , AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export const Person = ({name, favorite, image, office, id, color ,onDelete, onFavorite}) => {
    return (
        <div className='person'>
            <AiFillCloseCircle size={25} className='delete' onClick={() => onDelete(id)}/>
            <div className='cabecalho' style={{backgroundColor:color}}>
            <img src={image} alt={name}/>
            </div>
            <div className='rodape'>
            <h4>{name}</h4>
            <h5>{office}</h5>
            <div className='favorite'>
            {favorite ? < AiFillHeart size={25} onClick={onFavorite}/> : <AiOutlineHeart size={25} onClick={onFavorite} />}
            </div>
            </div>
        </div>
    )
}