import React, { useEffect, useState } from "react";
import { useFetch } from "./2-useFetch";
const url = "https://course-api.netlify.app/api/javascript-store-products";

const FetchExamples = () => {
  const { loading, product } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default FetchExamples;
