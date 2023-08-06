import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route components
import { Dapp } from "./components";
import Index from './components/Homev';
const App = () => (
  <Router>
    {/* Wrap your Route components in a Routes component */}
    <Routes>
      {/* Add a Route for the Dapp component */}
      <Route exact path="/" element={<Index />} />
      <Route exact path="/dapp" element={<Dapp />} />
    </Routes>
  </Router>
);

export default App;
