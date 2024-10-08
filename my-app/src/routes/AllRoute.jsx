import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/Home";
import UploadImage from "../components/UploadImage";
import Counter from "../components/Counter";
import CountryDropDown from "../components/CountryDropDown";
import YouTubeForm from "../components/YouTubeForm";
import FormController from "../components/FormController";
function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/file-upload" element={<UploadImage />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/country" element={<CountryDropDown />} />
      <Route path="/form/:id" element={<YouTubeForm />} />
      <Route path="/form-con" element={<FormController />} />
    </Routes>
  );
}

export default AllRoute;
