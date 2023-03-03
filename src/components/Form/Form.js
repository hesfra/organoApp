import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import TextField from '../Text'
import './form.css'
import {v4 as uuidv4} from 'uuid';

export const Form = (props) => {

    const [name, setName] = useState('');
    const [office, setOffice] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const id = uuidv4();

    const onSave = (e) => {
        e.preventDefault()
        props.onFormSubmit({
            name,
            office,
            image,
            team,
            id
            
        })
        setName('');
        setImage('');
        setTeam('');
        setOffice('');
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>fill out the form to create the collaborator's card</h2>
                <TextField
                    required={true}
                    label="Name"
                    placeholder="Write your name"
                    value={name}
                    onChanged={value => setName(value)}
                />
                <TextField
                    required={true}
                    label="Office"
                    placeholder="Write your office"
                    value={office}
                    onChanged={value => setOffice(value)}
                />
                <TextField
                    label="Image"
                    placeholder="Write the image address"
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <Dropdown
                    required={true}
                    label="Team"
                    items={props.teams}
                    value={team}
                    onChanged={value => setTeam(value)}
                />
                <Button text="Create card" />
            </form>
        </section>
    )
}
