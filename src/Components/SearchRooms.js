import React from "react";
import SingleRoom from "./SingleRoom";
import Rooms from "../rooms.json";
function SearchRooms({
  room,
  types,
  typeFilter,
  handleTypeFilter,
  hasPets,
  handleCheckhasPets,
  hasBreakfast,
  handleCheckhasBreakfast,
  selectPrice,
  handleSelectPrice,
  handleHasGuest,
  hasguest,
  guestcapacity,
  hassize,
  handleHasSize,
  hasprice,
  handleHasPrice,
}) {
  return (
    <div>
      <div className="search-title">
        <h1>Search Rooms</h1>
        <div></div>
      </div>
      <form className="formFilter">
        <div className="filterNav1">
        <div >
          <div>Room Type</div>
          <select
            className="type-filter"
            value={typeFilter}
            onChange={handleTypeFilter}
          >
            <option value="">All</option>
            {types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div >
          <div>Guests</div>
          <select
            className="hasguest"
            value={hasguest}
            onChange={handleHasGuest}
          >
            <option value="">0</option>
            {guestcapacity.map((guest, index) => (
              <option key={index} value={guest}>
                {guest}
              </option>
            ))}
          </select>
        </div>
        </div>
        <div className="priceFilter">
          <div >
            <input
              type="checkbox"
              value={hasprice}
              onChange={handleHasPrice}
            ></input>
            <span> Price Room ${selectPrice}</span>
          </div>
          <input
            type="range"
            min="100"
            max="500"
            value={selectPrice}
            onChange={handleSelectPrice}
          ></input>
        </div>
        <div className="filterNav3">
          <div>
            <p className="room-size">Room Size</p>
            <input
              className="room-size-input"
              value={hassize}
              onChange={handleHasSize}
            ></input>
          </div>
          <div className="checkboxFilter">
            <div className="hasPets">
              <input
                type="checkbox"
                value={hasPets}
                onChange={handleCheckhasPets}
              ></input>
              <label>Pets</label>
            </div>
            <div className="hasBreakfast">
              <input
                type="checkbox"
                value={hasBreakfast}
                onChange={handleCheckhasBreakfast}
              ></input>
              <label>Breakfast</label>
            </div>
          </div>
        </div>
      </form>
      <div className="room-container">
        {room
          .filter((elem) => {
            if (typeFilter && typeFilter.trim() != "") {
              if (!elem.type.toLowerCase().includes(typeFilter.toLowerCase()))
                return false;
            }
            if (hasPets) {
              if (!elem.pets) return false;
            }
            if (hasBreakfast) {
              if (!elem.breakfast) return false;
            }
            if (selectPrice && hasprice) {
              if (selectPrice != elem.price) return false;
            }
            if (hasguest != 0)
              if (elem.capacity != hasguest) {
                return false;
              }
            if (hassize)
              if (elem.size != hassize) {
                return false;
              }
            return true;
          })
          .map((elem, index) => (
            <SingleRoom id={elem.id} elem={elem} index={index} room={Rooms} />
          ))}
      </div>
    </div>
  );
}

export default SearchRooms;
