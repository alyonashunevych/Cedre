import React, { useState } from "react";

export default function Filter() {

  const [selectedFilters, setSelectedFilters] = useState({
    type: ["sofa"],
    material: [],
    color: [],
    price: [],
  });

  const [availableMaterials] = useState({
    sofa: ["Wood", "Leather", "Velour", "Textile", "Velvet", "Metal"],
    armchair: ["Wood", "Leather", "Velour", "Textile", "Velvet", "Metal"],
    wardrobe: ["Сhipboard", "Metal", "Wood"],
    bed: ["Wood", "Metal"],
    kitchen: ["Wood", "Steel"],
    decor: ["Ceramics", "Glass", "Metal", "Plastic"],
  });

  const [colors] = useState({
    color: ["Green",
    "Grey",
    "Orange",
    "Blue",
    "White",
    "Black",
    "Pink",
    "Red",
    "Yellow"]
  })

  const handleFilterChange = (category, value) => {
    if (category === 'type') {
      setSelectedFilters(prevState => ({
        ...prevState,
        type: [value], 
        material: [],
        color: [],
        price: [],
      }));
    } else {
      setSelectedFilters(prevState => ({
        ...prevState,
        [category]: prevState[category].includes(value)
          ? prevState[category].filter(item => item !== value)
          : [...prevState[category], value],
      }));
    }
  };
  

  return (
    <div className="filter">
      <h1 className="cat_h1">Catalog</h1>
      <div className="filter-category">
        <h2 className="cat_h2">Type</h2>
        <ul className="param_box">
          <li onClick={() => handleFilterChange("type", "sofa")}>
            <span
              className="param"
              style={{
                fontWeight: selectedFilters.type.includes("sofa")
                  ? "700"
                  : "500",
              }}
            >
              Sofa
            </span>
          </li>
          <li onClick={() => handleFilterChange("type", "armchair")}>
            <span
              className="param"
              style={{
                fontWeight: selectedFilters.type.includes("armchair")
                  ? "700"
                  : "500",
              }}
            >
              Armchair
            </span>
          </li>
          <li onClick={() => handleFilterChange("type", "wardrobe")}>
            <span
              className="param"
              style={{
                fontWeight: selectedFilters.type.includes("wardrobe")
                  ? "700"
                  : "500",
              }}
            >
              Wardrobe
            </span>
          </li>
          <li onClick={() => handleFilterChange("type", "bed")}>
            <span
              className="param"
              style={{
                fontWeight: selectedFilters.type.includes("bed")
                  ? "700"
                  : "500",
              }}
            >
              Bed
            </span>
          </li>
          <li onClick={() => handleFilterChange("type", "kitchen")}>
            <span
              className="param"
              style={{
                fontWeight: selectedFilters.type.includes("kitchen")
                  ? "700"
                  : "500",
              }}
            >
              Kitchen
            </span>
          </li>
          <li onClick={() => handleFilterChange("type", "decor")}>
            <span
              className="param"
              style={{
                fontWeight: selectedFilters.type.includes("decor")
                  ? "700"
                  : "500",
              }}
            >
              Decor and accessories
            </span>
          </li>
        </ul>
      </div>
      <div className="filter-category">
        <h2 className="cat_h2">Material</h2>
        <ul className="param_box">
          {availableMaterials[selectedFilters.type[0]] &&
            availableMaterials[selectedFilters.type[0]].map((material) => (
              <li
                key={material}
                onClick={() => handleFilterChange("material", material)}
              >
                <span
                  className="param"
                  style={{
                    fontWeight: selectedFilters.material.includes(material)
                      ? "700"
                      : "500",
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
          {colors.color.map((color) => (
            <li key={color} onClick={() => handleFilterChange("color", color)}>
              <span
                className="param"
                style={{
                  fontWeight: selectedFilters.color.includes(color)
                    ? "700"
                    : "500",
                }}
              >
                {color}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
