import React,{useState} from 'react'
import { Link } from "react-router-dom";
function DeluxeBanner({id,feature}) {
const[adhide, setAdhide]=useState(false)

  return (
    <div className='deluxe_wd30'
    onMouseEnter={()=>setAdhide(true)}
    onMouseLeave={()=>setAdhide(false)}>
      <img  className='img_wd100' src={feature.img}></img>
      <h3 className='bottom_0' >{feature.name}</h3>
      <p className='top_left'>{feature.sign}{feature.price}</p>
      <div className={adhide? "singleroom-background":"hide"}></div>
      <button className={adhide ? "singleroom-button2":"singleroom-button"}><Link className="singleroom-link-btn" to={`/DinamicDeluxe/${id}`}>Features</Link></button>
        </div>
  )
}

export default DeluxeBanner
