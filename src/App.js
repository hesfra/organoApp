import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';
import {v4 as uuidv4} from 'uuid';

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
  const changeTeamColor = (color, name) => {
    setTeams(teams.map(team => {
      if (team.name === name) {
        team.color = color;
      }
      return team
    }))
  }

  const deletePerson = () => {
    console.log('deletando snjhgbjhcsdbgf')
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onFormSubmit={person => onNewPersonAdd(person)} />
      {teams.map(team =>
        <Team
          changeColor={changeTeamColor}
          key={team.name}
          teamName={team.name}
          color={team.color}
          morePerson={morePerson.filter(person => person.team == team.name)}
          onDelete={deletePerson}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
