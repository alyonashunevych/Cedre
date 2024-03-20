import React from "react";

export default function Block1() {
  return (
    <div className="block1">
      <h1>Your Ideas, Our Craft</h1>

      <div className="form">
        <div className='chapter'>
            <label className="chapter_name">Select type</label>
            <select className="dropdown" id="type" name="type">
              <option className="form_el" value="sofas/armchairs">Sofas and Armchairs</option>
              <option className="form_el" value="wardrobes">Wardrobes</option>
              <option className="form_el" value="beds">Beds</option>
              <option className="form_el" value="kitchens">Kitchens</option>
              <option className="form_el" value="decor">Decor and accessories</option>
            </select>
        </div>

        <div className='chapter'>
            <label className="chapter_name">Made of</label>
            <select className="dropdown" id="matherial" name="matherial">
              <option className="form_el" value="wood">Wood</option>
              <option className="form_el" value="leather">Leather</option>
              <option className="form_el" value="velour">Velour</option>
              <option className="form_el" value="textile">Textile</option>
            </select>
        </div>

        <div className='chapter'>
            <label className="chapter_name">Price</label>
            <select className="dropdown" id="price" name="matherial">
              <option className="form_el" value="<$50">Up to $50</option>
              <option className="form_el" value="50-100">$50-$100</option>
              <option className="form_el" value="100-200">$100-$200</option>
              <option className="form_el" value="200-30">$200-$300</option>
              <option className="form_el" value=">$300">Over $300</option>
            </select>
        </div>
        
        <button className="prod_search">Search</button>
      </div>
    </div>
  );
}
