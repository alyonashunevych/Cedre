import React from "react";
import { RouterProvider } from "react-router-dom";
import { routing } from "./Routing";


class App extends React.Component {
  render() {
    return <RouterProvider router={routing} />;
  }
}

export default App;
