import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Team from './components/Team';
import {v4 as uuidv4} from 'uuid';
import Forms from './components/Form';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57c278',
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82cffa',
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#a6d157',
    },
    { 
      id: uuidv4(),
      name: 'Devops',
      color: '#e06869',
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#db6ebf',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#ffba05',
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#ff8a29',
    }
  ])

  const [morePerson, setMorePerson] = useState([]);

  const onNewPersonAdd = (person) => {
    setMorePerson([...morePerson, person]);
  }
  const changeTeamColor = (teamColor, id) => {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = teamColor;
      }
      return team
    }))
  }

  const deletePerson = (id) => {
    setMorePerson(morePerson.filter(person=> person.id !== id))
  }

  const createTeam =  (newTeam) =>{
    setTeams([...teams, {...newTeam}])
  }

  const changeFavorite = (id) =>{
    setMorePerson(morePerson.map(person =>{
      if(person.id === id)
      { 
        person.favorite = !person.favorite;
      }
      return person
    }))
  }

  return (
    <div className="App">
      <Banner />
      <div className='forms' style={{display:'flex', alignItems:'center', justifyContent: 'space-around'}}>
      <Forms.Form teams={teams.map(team => team.name)} onFormSubmit={person => onNewPersonAdd(person)}
      />
      <Forms.TeamForm 
       createTeam = {createTeam}
      />
      </div>
      {teams.map(team =>
        <Team
          changeColor={changeTeamColor}
          key={team.id}
          team={team}
          morePerson={morePerson.filter(person => person.team === team.name)}
          onDelete={deletePerson}
          onFavorite={changeFavorite}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
