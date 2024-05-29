import React, { useState, useEffect, useContext } from "react";
import { db } from "../firebase";
import { FiltersContext } from "../FiltersContext";

export default function Filter({ priceRanges }) {
  const { filters, setFilters } = useContext(FiltersContext);
  const [availableMaterials, setAvailableMaterials] = useState([]);
  const [colors, setColors] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const collectionNames = {
    Sofa: "Sofa",
    Armchair: "Armchair",
    Wardrobe: "Wardrobe",
    Bed: "Bed"
  };

  useEffect(() => {
    // Отримуємо список всіх можливих типів товарів
    setProductTypes(Object.keys(collectionNames));
  }, []);

  useEffect(() => {
    const fetchMaterialsAndColors = async () => {
      if (filters.type && filters.type.length > 0) {
        const selectedType = filters.type[0];
        try {
          let uniqueMaterials = new Set();
          let uniqueColors = [];

          // Отримуємо дані про товари вибраного типу
          const snapshot = await db.collection(collectionNames[selectedType]).get();

          snapshot.forEach((doc) => {
            const data = doc.data();
            // Збираємо унікальні матеріали та кольори
            data.material.forEach((material) => {
              uniqueMaterials.add(material);
            });
            uniqueColors.push(data.color);
          });

          setAvailableMaterials(Array.from(uniqueMaterials));
          setColors(Array.from(new Set(uniqueColors)));
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }
    };

    fetchMaterialsAndColors();
  }, [filters.type]);

  const handleFilterChange = (category, value) => {
    if (category === "type") {
      setFilters((prevState) => ({ ...prevState, [category]: [value] }));
    } else if (category === "price") {
      setFilters((prevState) => {
        if (prevState.price && prevState.price.includes(value)) {
          return { ...prevState, [category]: [] };
        }
        return { ...prevState, [category]: [value] };
      });
    } else {
      setFilters((prevState) => ({
        ...prevState,
        [category]: prevState[category]?.includes(value)
          ? prevState[category].filter((item) => item !== value)
          : [...(prevState[category] || []), value],
      }));
    }
  };

  useEffect(() => {
    console.log("Current Filters:", filters);
  }, [filters]);

  return (
    <div className="filter">
      <h1 className="cat_h1">Catalog</h1>
      <div className="filter-category">
        <h2 className="cat_h2">Type</h2>
        <ul className="param_box">
          {productTypes.map((type) => (
            <li key={type} onClick={() => handleFilterChange("type", type)}>
              <span
                className="param"
                style={{
                  fontWeight: filters?.type?.includes(type) ? "700" : "500",
                }}
              >
                {type}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-category">
        <h2 className="cat_h2">Material</h2>
        <ul className="param_box">
          {availableMaterials.map((material) => (
            <li key={material} onClick={() => handleFilterChange("material", material)}>
              <span
                className="param"
                style={{
                  fontWeight: filters?.material?.includes(material) ? "700" : "500",
                }}
              >
                {material}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-category">
        <h2 className="cat_h2">Color</h2>
        <ul className="param_box">
          {colors.map((color) => (
            <li key={color} onClick={() => handleFilterChange("color", color)}>
              <span
                className="param"
                style={{
                  fontWeight: filters?.color?.includes(color) ? "700" : "500",
                }}
              >
                {color}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-category">
        <h2 className="cat_h2">Price</h2>
        <ul className="param_box">
          {priceRanges.map((priceRange) => (
            <li key={priceRange} onClick={() => handleFilterChange("price", priceRange)}>
              <span
                className="param"
                style={{
                  fontWeight: filters?.price?.includes(priceRange) ? "700" : "500",
                }}
              >
                {priceRange}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
