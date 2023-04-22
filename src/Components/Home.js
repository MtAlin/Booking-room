import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import DeluxeBanner from "./DeluxeBanner";
import Features from "../features.json"
function Home() {
  return (
    <div className="home">
      <Banner
        img="banner-home-Img"
        text="banner-home-Text"
        title="Luxuorius Rooms"
        line="banner-home-Line"
        subtitle="Deluxe Rooms Starting At $299"
        btn="banner-home-Btn"
        btnText="OUR ROOMS"
        home='/rooms'
        subtitles="banner-home-subtitle"
      />
       <Services/>
       <div className="deluxe-container">
        {
          Features.map((feature,index)=>( <DeluxeBanner key={index} id={feature.id} feature={feature}/>)
          )
      
        }
       </div>
    </div>
  );
}

export default Home;
