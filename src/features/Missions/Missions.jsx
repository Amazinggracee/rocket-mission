import React from 'react';
import './Missions.css';

function Missions() {
  const missions = [
    {
      id: 1,
      mission_name: 'mars',
      mission_description: 'dffffffffffffffffffffffffffff',
      joined: false,
    },
    {
      id: 2,
      mission_name: 'mars',
      mission_description: 'dffffffffffffffffffffffffffff',
      joined: false,
    },
    {
      id: 3,
      mission_name: 'mars',
      mission_description: 'dffffffffffffffffffffffffffff',
      joined: false,
    },
  ];
  return (
    <div className="missions">
      <table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((elem) => (
              <tr key={elem.id}>
                <td>{elem.mission_name}</td>
                <td>{elem.mission_description}</td>
                <td>{elem.joined}</td>
                <td><button type="button">Join Mission</button></td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </div>
  );
}

export default Missions;
