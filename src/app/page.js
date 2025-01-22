"use client";
import { useState, useEffect } from "react";
import HeaderComponent from "./components/HeaderComponent";
import TableContainer from "./components/TableContainer";
import ComparisonComponent from "./components/ComparisonComponent";

export default function Home() {
  const [comparisonData, setComparisonData] = useState({});
  const [showComparison, setShowComparison] = useState(false);
  const compareDataLength = Object.keys(comparisonData).length;
  return (
    <div className="container mx-auto relative">
      <HeaderComponent
        setShowComparison={setShowComparison}
        compareDataLength={compareDataLength}
      />
      <TableContainer setComparisonData={setComparisonData} />
      {showComparison && compareDataLength >= 2 && <ComparisonComponent />}
    </div>
  );
}
