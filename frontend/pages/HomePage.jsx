import React from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";

function HomePage() {
  return (
    <>
      <Filter />
      <div className="flex flex-wrap justify-center items-center mx-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default HomePage;
