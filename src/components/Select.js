import React from 'react';

export default function Select({ setDirect }) {
  return (
    <div>
      <select onChange = { (e) => setDirect(e.target.value)}>
        <option value="All">ALL</option>
        <option value="George Lucas">George Lucas</option>
        <option value="Irvin Kershner">Irvin Kershner</option>
        <option value="Richard Marquand">Richard Marquand</option>
        <option value="J.J Abrams">J.J Abrams</option>
        <option value="Rian Johnson">Rian Johnson</option>
        <option value="Dave Filoni">Dave Filoni</option>
        <option value="Gareth Edwards">Gareth Edwards</option>
        <option value="Ron Howard">Ron Howard</option>
        <option value="Patty Jenkins">Patty Jenkins</option>
      </select>
    
    </div>
  );
}
