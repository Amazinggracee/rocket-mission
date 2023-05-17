import React, { useEffect } from 'react';
import './Rockets.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from './rocketSlice';

function Rockets() {
  const comp = useSelector((state) => state.rockets.rockets);
  console.log(comp);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  return (
    <div className="rockets">
      {
      comp.map((elem) => (
        <div key={elem.rocket_id} className="rocketTile">
          <img src={elem.rocket_img} alt="" className="rocketimg" />
          <div className="rocketDetails">
            <h2 className="rocketName">{elem.rocket_name}</h2>
            <p className="rocketDescription">{elem.rocket_description}</p>
            <button disabled={elem.reserved} onClick={() => { }} type="button" className="reserveButton">Reserve Rocket</button>
          </div>
        </div>
      ))
      }
    </div>
  );
}

export default Rockets;
