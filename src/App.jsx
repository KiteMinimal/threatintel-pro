// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import RouterComponent from "./components/Router";

export default function App() {
  return (
      <div className="bg-black font-myfont min-h-screen overflow-auto">
        <Navbar />
        <main className="mt-16">
          <RouterComponent />
        </main>
      </div>
  );
}
