import React, { useState, useEffect } from 'react';
import { fetchDirectors } from '../../../services/directors';
import Select from '../../../components/Select';


export default function Directors() {
  const [directors, setDirectors] = useState ([]);
  const [name, setDirect] = useState ('All');

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchDirectors(name);
        console.log(resp);
        setDirectors(resp);
      } catch (e) {
        alert(e.message);
      }

    };
    fetch();

  }, [name]);
        
    
  return (
    <div className='director'>
      <Select setDirect={setDirect} />
      {directors.map((director) => (
        <div key={director.id}>
          <h2>{director.name}</h2>
          <p>Date Of Birth: {director.birthdate}</p>   
        </div>
      ))}
    </div>
  );
}
