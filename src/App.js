import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';


function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57c278',
      secundaryColor: '#d9f7e9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82cffa',
      secundaryColor: '#e8f8ff',
    },
    {
      name: 'Data Science',
      primaryColor: '#a6d157',
      secundaryColor: '#f0f8e2',
    },
    {
      name: 'Devops',
      primaryColor: '#e06869',
      secundaryColor: '#fde7e8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#db6ebf',
      secundaryColor: '#fae9f5',
    },
    {
      name: 'Mobile',
      primaryColor: '#ffba05',
      secundaryColor: '#fff5d9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#ff8a29',
      secundaryColor: '#ffeedf',
    }
  ]

  const [morePerson, setMorePerson] = useState([]);

  const onNewPersonAdd = (person) => {
    setMorePerson([...morePerson, person]);
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onFormSubmit={person => onNewPersonAdd(person)} />
      {teams.map(team =>
        <Team key={team.name}
          teamName={team.name}
          primaryColor={team.primaryColor}
          secundaryColor={team.secundaryColor}
          morePerson={morePerson.filter(person =>person.team == team.name)}
        />)}
        <Footer/>
    </div>
  );
}

export default App;
