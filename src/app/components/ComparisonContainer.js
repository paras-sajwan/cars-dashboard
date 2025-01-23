"use client";
import { useEffect, useState } from "react";
import { jsonData } from "../jsondata";
import ComparisonComponent from "./ComparisonComponent";

export default function ComparisonContainer({
  comparisonData,
  setShowComparison,
}) {
  const [data, setData] = useState([]);
  const [parameters, setParameters] = useState([]);

  useEffect(() => {
    const mappedData = Object.keys(comparisonData).map((el) => jsonData[+el]);
    setData(mappedData);
    setParameters(Object.keys(jsonData[0]));
  }, []);
  return (
    <ComparisonComponent
      parameters={parameters}
      data={data}
      setShowComparison={setShowComparison}
    />
  );
}
