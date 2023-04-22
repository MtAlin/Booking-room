import React from 'react'
import { Link } from "react-router-dom";
function Banner({img,text,title,line,subtitle, btn,btnText,home,subtitles}) {
  return (
    <div className={img}>
        <div className={text}>
            <h1>{title}</h1>
            <div className={line}></div>
            <h5 className={subtitles}>{subtitle}</h5>
            <button className={btn}>
              <Link to={home}>{btnText}</Link>
            </button>
        </div>
    </div>
  )
}

export default Banner