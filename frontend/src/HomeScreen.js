import React, { useState } from "react";
import Nav from "./Nav";
import Map from "./Map";
function HomeScreen() {
  const [cinemas, setCinemas] = useState([]);

  const fetchCinemas = async () => {
    const response = await fetch("http://localhost:3002/api/longitude_and_latitude");
    const responseData = await response.json();
    setCinemas(responseData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCinemas();
  };

  return (
    <div>
      <Nav />
      <div style={{marginTop: "30px"}}>
        <button type="submit" style={{ width: "100%" }} onClick={handleSubmit}>Start Search</button>
        <Map cinemas={cinemas}></Map>
      </div>
    </div>
  );
};

export default HomeScreen;
