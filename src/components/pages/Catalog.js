import React from "react";
import Filter from "../Catalog/Filter";
import Item from "../Catalog/Items";

export default function Catalog() {
  return (
    <div className='catalog'>
      <Filter/>
      <Item/>
    </div>
  );
}
