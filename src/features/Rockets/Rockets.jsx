import React from 'react';
import './Rockets.css';

function Rockets() {
  const comp = [
    {
      uname: 'Falcon 9',
      des: 'loremsfdnfiojnfkjds',
      url: 'planet.png',
      index: 1,
      reserved: false,
    },
    {
      uname: 'Falcon 19',
      des: 'loremsfdnfiojnfkjds',
      url: 'planet.png',
      index: 2,
      reserved: true,
    },
  ];

  return (
    <div className="rockets">
      {
        comp.map((elem) => (
          <div key={elem.index} className="rocketTile">
            <img src={elem.url} alt="" className="rocketimg" />
            <div className="rocketDetails">
              <h2 className="rocketName">{elem.uname}</h2>
              <p className="rocketDescription">{elem.des}</p>
              <button disabled={elem.reserved} onClick={() => { console.log(elem.uname); }} type="button" className="reserveButton">Reserve Rocket</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Rockets;
