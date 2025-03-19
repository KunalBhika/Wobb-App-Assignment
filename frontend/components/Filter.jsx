import React from "react";
import { Funnel } from "lucide-react";

function Filter() {
  return (
    <div className="join flex justify-center items-center mt-10">
      <div className="bg-primary/10 rounded-lg mx-4">
        <Funnel size={40} color={"#3b25c1"} className="p-2" />
      </div>
      <input
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="All"
      />
      <input
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="Applied"
      />
      <input
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="Hired"
      />
      <input
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="Closed"
      />
    </div>
  );
}

export default Filter;
