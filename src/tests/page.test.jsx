import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";
import ComparisonComponent from "@/app/components/ComparisonComponent";
import ComparisonContainer from "@/app/components/ComparisonContainer";
import HeaderComponent from "@/app/components/HeaderComponent";

describe("Components rendering", () => {
  it("Home page rendering without crash", () => {
    render(<Page />);
  });
  it("Comparison UI component rendering without crash", () => {
    render(<ComparisonComponent />);
  });
  it("Comparison container component rendering without crash", () => {
    render(<ComparisonContainer />);
  });
  it("Header component rendering without crash", () => {
    render(<HeaderComponent />);
  });
});
