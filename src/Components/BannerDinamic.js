import React from 'react'
import { Link } from "react-router-dom";
function BannerDinamic({room}) {
  return (
    <div className='bannerdinamic-rooms-Img' style={{ backgroundImage:`url(${room.img})`}}>
    <div className="banner-home-Text">
        <h1>{room.name}</h1>
        <div className="banner-home-Line"></div>
        <button className="banner-home-Btn">
          <Link to="/Rooms">RETURN TO ROOMS</Link>
        </button>
    </div>
</div>
  )
}

export default BannerDinamic