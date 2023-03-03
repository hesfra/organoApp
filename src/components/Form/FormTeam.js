import { useState } from 'react'
import Button from '../Button'
import TextField from '../Text'
import './form.css'

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
                        color
                    }
                
                )
                setColor('');
                setName('');
            }}>
                <h2>fill out the form to create a new team</h2>
                <TextField
                    required
                    label="Team name"
                    placeholder="Write the new team name"
                    value={name}
                    onChanged={value => setName(value)}
                />
                <TextField
                    required
                    label="Color"
                    placeholder="please select the color of the new team"
                    value={color}
                    onChanged={value => setColor(value)}
                />
                <Button text="Create team" />
            </form>
        </section>
    )}