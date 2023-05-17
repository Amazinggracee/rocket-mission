import React from 'react';
import './Profile.css';

function Profile() {
  const rockets = [
    {
      name: 'Falcon 9',
      des: 'loremsfdnfiojnfkjds',
      url: 'planet.png',
      index: 1,
      reserved: false,
    },
    {
      name: 'Falcon 19',
      des: 'loremsfdnfiojnfkjds',
      url: 'planet.png',
      index: 2,
      reserved: true,
    },
  ];
  const missions = [
    {
      id: 1,
      mission_name: 'mars',
      mission_description: 'dffffffffffffffffffffffffffff',
      joined: true,
    },
    {
      id: 2,
      mission_name: 'Neptune',
      mission_description: 'dffffffffffffffffffffffffffff',
      joined: false,
    },
    {
      id: 3,
      mission_name: 'Jupiter',
      mission_description: 'dffffffffffffffffffffffffffff',
      joined: true,
    },
  ];
  return (
    <div className="profile">
      <div className="listbox">
        <h2 className="listtitle">My Missions</h2>
        <ul className="itemlist">
          {
            missions.map((elem) => {
              if (elem.joined) return <li key={elem.id} className="listitems">{elem.mission_name}</li>;
              return null;
            })
          }
        </ul>
      </div>
      <div className="listbox">
        <h2 className="listtitle">My Rockets</h2>
        <ul className="itemlist">
          {
            rockets.map((elem) => {
              if (elem.reserved) return <li key={elem.id} className="listitems">{elem.name}</li>;
              return null;
            })
            }
        </ul>
      </div>
    </div>
  );
}

export default Profile;
