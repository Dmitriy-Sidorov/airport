import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {AuthPage} from "./pages/AuthPage";
import {AirportDetailsPage} from "./pages/AirportDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/airport/:id" element={<AirportDetailsPage/>}/>
      </Routes>
    </>
  );
}

export default App;
