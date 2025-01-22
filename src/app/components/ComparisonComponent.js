"use client";
import { useEffect, useState } from "react";
import { jsonData } from "../jsondata";

export default function ComparisonComponent({
  comparisonData,
  setShowComparison,
}) {
  const [data, setData] = useState([]);
  const [parameters, setParameters] = useState([]);

  useEffect(() => {
    console.log("comparisonData", comparisonData);
    const dummy = Object.keys(comparisonData).map((el) => jsonData[+el]);
    console.log("dummy", dummy);
    setData(dummy);
    setParameters(Object.keys(jsonData[0]));
  }, []);
  return (
    <div className="comparison-popup ">
      <table className="w-full">
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          {parameters &&
            parameters.map((parameter, pIndex) => (
              <tr key={pIndex}>
                <td>{parameter}</td>
                {data.map((car, carIndex) => (
                  <td key={carIndex}>
                    {typeof car[parameter] === "object"
                      ? car[parameter]["average_rating"]
                      : car[parameter]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={() => setShowComparison((prev) => !prev)}>Close</button>
    </div>
  );
}
