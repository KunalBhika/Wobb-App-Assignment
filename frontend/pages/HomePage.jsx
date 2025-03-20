import React from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import cardData from "../data.js";

function HomePage() {
  return (
    <>
      <Filter />
      <div className="flex flex-wrap justify-center items-center mx-auto">
        {cardData.map((campaignData, index) => {
          return <Card key={index} cardData={campaignData} />;
        })}
      </div>
    </>
  );
}

export default HomePage;
