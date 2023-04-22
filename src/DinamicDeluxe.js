import React from 'react'
import {useParams} from 'react-router-dom'
import Features from "../src/features.json"
import BannerDinamic from './Components/BannerDinamic'
import DeluxeBannerDinamic from './DeluxeBannerDinamic'
function DinamicDeluxe() {
    let params = useParams()
   const deluxe = Features.find(feature =>feature.id==params.deluxeid)
   console.log(deluxe)
  return (
    <div>
        <DeluxeBannerDinamic deluxe={deluxe} />
      <div className="dinamic-pictures-container">
        <img src={deluxe.img1}></img>
        <img src={deluxe.img2}></img>
        <img src={deluxe.img3}></img>
      </div>
      <div className="dinamic-main-text-container">
        <div className="dinamic-text-container">
          <div className="dinamic-detail">
            <h1 className="fz-20">Details</h1>
            <p className="fz-12">
              Single room occupancy (more commonly abbreviated to SRO) is a form
              of housing that is typically aimed at residents with low or
              minimal incomes who rent small, furnished single rooms with a bed,
              chair, and sometimes a small desk.[1] SRO units are rented out as
              permanent residence and/or primary residence [2] to individuals,
              within a multi-tenant building where tenants share a kitchen,
              toilets or bathrooms. SRO units range from 7 to 13 square metres
              (80 to 140 sq ft).[3][1] In some instances, contemporary units may
              have a small refrigerator, microwave, or sink.[1]
            </p>
          </div>
          <div className="dinamic-info">
            <h1 className="fz-20">Info</h1>
            <p>Price: ${deluxe.price}</p>
            <p>Size: {deluxe.size} SQFT</p>
            <p> Max Capacity: {deluxe.capacity} people</p>
            <p>{deluxe.pets1}</p>
            <p>{deluxe.breakfast1}</p>
          </div>
        </div>
        <div className="dinamic-extras-container">
          <h1 className="fz-20">Extras</h1>
          <div className="dinamic-extras-text">
            <div>
              <p className="fz-12"> - Standard bed sizes are based on standard mattress sizes</p>
              <p className="fz-12"> - Complementary refresh</p>
              <p className="fz-12"> - Confortable beds</p>
            </div>
            <div>
              <p className="fz-12"> - Standard bed sizes are based on standard mattress sizes</p>
              <p className="fz-12"> - Complementary refresh</p>
              <p className="fz-12"> - Confortable beds</p>
            </div>
            <div>
              <p className="fz-12"> - Standard bed sizes are based on standard mattress sizes</p>
              <p className="fz-12"> - Complementary refresh</p>
              <p className="fz-12"> - Confortable beds</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h6>Autentificare în extranet</h6>
        <p>Booking.com face parte din Booking Holdings Inc., liderul mondial în călătorii online şi servicii asociate.</p>
      </div>
    </div>
  )
}

export default DinamicDeluxe