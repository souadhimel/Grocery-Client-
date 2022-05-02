import React from "react";
import "./Packages.css";
import { useEffect, useState } from "react";
import Package from "../Package/Package";

const Packages = () => {
  const [vegetable, setVegetable] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/vegetable")
      .then((res) => res.json())
      .then((data) => setVegetable(data));
  }, []);
  return (
    <div style={{ marginTop: 90 }}>
      <h2 className="text-center heading">Packages</h2>
      <div className="row row-cols-md-3 g-3">
        {vegetable.map((p) => (
          <Package key={p._id} vegetable={p}></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;