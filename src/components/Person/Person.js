import './Person.css';

export const Person = ({name, image, office, primaryColor}) => {
    return (
        <div className='person'>
            <div className='cabecalho' style={{backgroundColor:primaryColor}}>
            <img src={image} alt={name}/>
            </div>
            <div className='rodape'>
            <h4>{name}</h4>
            <h5>{office}</h5>
            </div>
        </div>
    )
}