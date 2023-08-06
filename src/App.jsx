import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import Routes and Route components
import { Dapp } from "./components";
import Index from "./components/Homev";
const App = () => (
  <Router>
    {/* Wrap your Route components in a Routes component */}
    <Routes>
      {/* Add a Route for the Dapp component */}
      <Route path="/" element={<Index />} />
      <Route path="/dapp" element={<Dapp />} />
    </Routes>
  </Router>
);

export default App;
