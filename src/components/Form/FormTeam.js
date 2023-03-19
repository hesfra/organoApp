import { useState } from 'react'
import Button from '../Button'
import Fields from '../Fields'
import './form.css'
import {v4 as uuidv4} from 'uuid';

export const TeamForm = ({createTeam}) => {

   const [name, setName] = useState('')
   const [color, setColor] = useState('')

    return (
        <section className='form'>
            <form onSubmit={(e)=>{
                e.preventDefault()
                createTeam(
                    {
                        name,
                        color,
                        id: uuidv4()
                    }
                
                )
                setColor('');
                setName('');
            }}>
                <h2>fill out the form to create a new team</h2>
                <Fields
                    required
                    label="Team name"
                    placeholder="Write the new team name"
                    value={name}
                    onChanged={value => setName(value)}
                />
                <Fields
                    required
                    label="Color"
                    type='color'
                    placeholder="please select the color of the new team"
                    value={color}
                    onChanged={value => setColor(value)}
                />
                <Button text="Create team" />
            </form>
        </section>
    )}