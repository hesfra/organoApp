import Button from '../Button'
import Dropdown from '../Dropdown'
import TextField from '../Text'
import './form.css'

export const Form = () => {

    const teams=[
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const onSave = (e) =>{
        e.preventDefault()
        console.log("the form was submited")
    }

    return(
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>fill out the form to create the collaborator's card</h2>
            <TextField  required={true} label="Name" placeholder ="Write your name"/>
            <TextField required={true} label="Office" placeholder="Write your office"/>
            <TextField label="Image" placeholder="Write the image address"/> 
            <Dropdown  required={true} label="Team" items={teams}/>
            <Button text="Create card"/>           
            </form>
        </section>
    )
}
