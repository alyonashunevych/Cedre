import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { db } from "../firebase";
import { FiltersContext } from "../FiltersContext";

export default function Block1() {
  const { setFilters } = useContext(FiltersContext);
  const [selectedType, setSelectedType] = useState("Sofa"); // Початкове значення "Sofa"
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [materials, setMaterials] = useState([]);
  const navigate = useNavigate();
  const collectionNames = {
    Sofa: "Sofa",
    Armchair: "Armchair",
    Wardrobe: "Wardrobe",
    Bed: "Bed"
  };

  useEffect(() => {
    fetchMaterials(selectedType);
  }, [selectedType]);

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedType(selectedType);
    setSelectedMaterial(""); // Скидання обраного матеріалу при зміні типу
  };

  const handleMaterialChange = (e) => {
    const selectedMaterial = e.target.value;
    setSelectedMaterial(selectedMaterial);
  };

  const handlePriceChange = (e) => {
    const selectedPrice = e.target.value;
    setSelectedPrice(selectedPrice);
  };

  const fetchMaterials = async (selectedType) => {
    try {
      if (selectedType) {
        const snapshot = await db.collection(selectedType).get();
        let uniqueMaterials = new Set();

        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.material) {
            data.material.forEach((material) => {
              uniqueMaterials.add(material);
            });
          }
        });

        setMaterials(Array.from(uniqueMaterials));
        console.log("Materials for", selectedType, ":", Array.from(uniqueMaterials));
      }
    } catch (error) {
      console.error("Error fetching materials: ", error);
    }
  };

  const handleSearch = () => {
    setFilters({
      type: selectedType ? [selectedType] : [],
      material: selectedMaterial ? [selectedMaterial] : [],
      price: selectedPrice ? [selectedPrice] : [],
    });
    navigate('/catalog');
  };

  useEffect(() => {
    if (materials.length > 0) {
      setSelectedMaterial(materials[0]);
    }
  }, [materials]);

  return (
    <div className="block1">
      <h1>Your Ideas, Our Craft</h1>

      <div className="form">
        <div className="chapter">
          <label className="chapter_name" htmlFor="type">
            Select type
          </label>
          <select
            className="dropdown"
            id="type"
            name="type"
            onChange={handleTypeChange}
          >
            <option disabled value="">
              Select type
            </option>
            {Object.entries(collectionNames).map(([key, value]) => (
              <option key={key} className="form_el" value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div className="chapter">
          <label className="chapter_name" htmlFor="material">
            Made of
          </label>
          <select
            className="dropdown"
            id="material"
            name="material"
            onChange={handleMaterialChange}
            value={selectedMaterial}
          >
            <option disabled value="">
              Select material
            </option>
            {materials.map((material, index) => (
              <option key={index} className="form_el" value={material}>
                {material}
              </option>
            ))}
          </select>
        </div>

        <div className="chapter">
          <label className="chapter_name" htmlFor="price">
            Price
          </label>
          <select
            className="dropdown"
            id="price"
            name="price"
            onChange={handlePriceChange}
            value={selectedPrice}
          >
            <option disabled value="">
              Select price
            </option>
            <option className="form_el" value="<$50">
              Up to $50
            </option>
            <option className="form_el" value="50-100">
              $50-$100
            </option>
            <option className="form_el" value="100-200">
              $100-$200
            </option>
            <option className="form_el" value="200-300">
              $200-$300
            </option>
            <option className="form_el" value=">$300">
              Over $300
            </option>
          </select>
        </div>
        <button className="prod_search" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
