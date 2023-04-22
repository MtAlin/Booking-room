import React, { useState } from "react";
import Banner from "./Banner";
import SearchRooms from "./SearchRooms";
import Room from "../rooms.json";
function Rooms() {
  const [room, setRoom] = useState(Room);
  const [typeFilter, setTypeFilter] = useState("");
  const [hasPets, setThasPets] = useState(false);
  const [hasBreakfast, setThasBreakfast] = useState(false);
  const [selectPrice, setselectPrice] = useState("");
  const [hasguest, sethasguest] = useState(0);
  const [hassize, sethassize] = useState("");
  const [hasprice, sethasprice] = useState(false);

  let types = room.map((room) => room.type);
  types = [...new Set(types)];

  console.log(typeFilter);

  let guestcapacity = room.map((room) => room.capacity);
  guestcapacity.sort((a, b) => a - b);
  guestcapacity = [...new Set(guestcapacity)];

  const handleTypeFilter = (e) => {
    setTypeFilter(e.target.value);
  };
  const handleCheckhasPets = (e) => {
    setThasPets(!hasPets);
  };
  const handleCheckhasBreakfast = (e) => {
    setThasBreakfast(!hasBreakfast);
  };
  const handleSelectPrice = (e) => {
    setselectPrice(e.target.value);
  };
  const handleHasGuest = (e) => {
    sethasguest(e.target.value);
  };
  const handleHasSize = (e) => {
    sethassize(e.target.value);
  };
  const handleHasPrice = (e) => {
    sethasprice(!hasprice);
  };

  console.log(hasprice)
  return (
    <div className="rooms">
      <Banner
        img="banner-rooms-Img"
        text="banner-rooms-Text"
        title="Our Rooms"
        line="banner-rooms-Line"
        subtitle=""
        btn="banner-rooms-Btn"
        btnText="RETURN HOME"
        home="/"
      />
      <SearchRooms
        room={room}
        types={types}
        typeFilter={typeFilter}
        handleTypeFilter={handleTypeFilter}
        hasPets={hasPets}
        handleCheckhasPets={handleCheckhasPets}
        hasBreakfast={hasBreakfast}
        handleCheckhasBreakfast={handleCheckhasBreakfast}
        selectPrice={selectPrice}
        handleSelectPrice={handleSelectPrice}
        hasguest={hasguest}
        handleHasGuest={handleHasGuest}
        guestcapacity={guestcapacity}
        hassize={hassize}
        handleHasSize={handleHasSize}
        hasprice={hasprice}
        handleHasPrice={handleHasPrice}
      />
    </div>
  );
}

export default Rooms;
