import React from "react";
import { RouterProvider } from "react-router-dom";
import { routing } from "./Routing";
import { FiltersProvider } from "../src/components/FiltersContext"; // Імпортуйте FiltersProvider

class App extends React.Component {
  render() {
    return (
      <FiltersProvider>
        <RouterProvider router={routing} />
      </FiltersProvider>
    );
  }
}

export default App;
