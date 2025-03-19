import React from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import cardData from "../data.js";

function HomePage() {
  return (
    <>
      <Filter />
      <div className="flex flex-wrap justify-center items-center mx-auto">
        <Card cardData={cardData[0]} />
        <Card cardData={cardData[1]} />
        <Card cardData={cardData[2]} />
        <Card cardData={cardData[3]} />
        <Card cardData={cardData[0]} />
        <Card cardData={cardData[0]} />
      </div>
    </>
  );
}

export default HomePage;
