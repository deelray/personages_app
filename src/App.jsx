import React, { useState, useEffect } from 'react';
import './App.scss';
import getPeople from './api/api';
import PersonCard from './components/PersonCard';

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople()
      .then((allPeople) => {
        setPeople(allPeople)
      })
  }, []);

  return (
    <main>
      <h1>Personages:</h1>
      {people.map((person) => {
        return <PersonCard {...person} key={person.name} />
      })}
    </main>
  );
}

export default App;
