import React, { useState } from "react";
import { Link } from "react-router-dom";
function SingleRoom({index,elem,id}) {  
  const[adhide, setAdhide]=useState(false)
  return (
    <div className="room" key={index}
    onMouseEnter={()=>setAdhide(true)}
    onMouseLeave={()=>setAdhide(false)}>
      <img className="room-img" src={elem.img}></img>
      <h3 className="room-text-bottom ">{elem.name}</h3>
      <p className="price-room-top">{elem.sign}{elem.price}</p>
      <div className={adhide? "singleroom-background":"hide"}></div>
      <button className={adhide ? "singleroom-button2":"singleroom-button"}><Link className="singleroom-link-btn" to={`/DinamicRoom/${id}`}>Features</Link></button>
    </div>
  );
}

export default SingleRoom;
