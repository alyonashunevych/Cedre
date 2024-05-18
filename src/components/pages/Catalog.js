// Catalog.js
import React, { useContext } from "react";
import Filter from "../Catalog/Filter";
import Item from "../Catalog/Item";
import { FiltersContext } from "../FiltersContext";

export default function Catalog() {
  const { filters } = useContext(FiltersContext);
  const priceRanges = ["<$50", "50-100", "100-200", "200-300", ">$300"];
 
  return (
    <div className="catalog">
      <Filter priceRanges={priceRanges} />
      <Item filters={filters} />
    </div>
  );
}
