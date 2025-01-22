"use client";
import { useEffect, useState } from "react";
import { jsonData } from "../jsondata";

export default function ComparisonComponent() {
  const [data, setData] = useState(jsonData);
  const [parameters, setParameters] = useState([]);

  useEffect(() => {
    setParameters(Object.keys(data[0]));
  }, []);
  return (
    <div>
      <table>
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
                      ? JSON.stringify(car[parameter])
                      : car[parameter]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
