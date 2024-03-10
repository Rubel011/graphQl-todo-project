import React from "react";
import { useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

const CountryDropDown = () => {
  const [country, setCountry] = useState(0);

  console.log(country);
  return (
    <form>
      <h1>This is the page for country data visible</h1>
      <label htmlFor="country-name">click here to select the options</label>
      <select
        name="country"
        id="country-name"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      >
        {countries.map((ele, ind) => (
          <option value={ind} key={ind}>
            {ele.name}
          </option>
        ))}
      </select>
      <select name="cities" id="cities-name">
        {countries[country].cities.map((ele, ind) => (
          <option value={ind} key={ind}>
            {ele}
          </option>
        ))}
      </select>
    </form>
  );
};

export default CountryDropDown;
