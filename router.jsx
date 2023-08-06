import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Dapp } from "./src/components";
import Index from "./src/components/Homev";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Index />} />
      <Route path="/dapp" element={<Dapp />} />
    </Route>
  )
);

export default router;
