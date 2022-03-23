import React, { useEffect, useState } from 'react';
import { fetchViewers } from '../../services/viewers';



export default function Movies() {
  const [viewers, setViewers] = useState ([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchViewers();
        setViewers(resp);
      } catch (e) {
        alert(e.message);
      }
      
    };
    fetch();

  }, []);

  return ( 
    <div className='viewer'>
      {viewers.map((viewer) => ( 
        <div key={viewer.id}>
          <h2> {viewer.name}</h2>
        </div>
      ))}
    </div>
  );
}