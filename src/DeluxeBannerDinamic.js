import React from 'react'
import { Link } from "react-router-dom";
function DeluxeBannerDinamic({deluxe}) {
  return (
    <div className='bannerdinamic-rooms-Img' style={{ backgroundImage:`url(${deluxe.img})`}}>
    <div className="banner-home-Text">
        <h1>{deluxe.name}</h1>
        <div className="banner-home-Line"></div>
        <button className="banner-home-Btn">
          <Link to="/">RETURN HOME</Link>
        </button>
    </div>
</div>
  )
}

export default DeluxeBannerDinamic