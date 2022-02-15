import React from "react";
import renderer from "react-test-renderer";
import BrandList from "../BrandList";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";
import { render, screen, fireEvent } from "@Testing-Library/react";
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("BrandList component should render properly", () => {
  const BrandListContainer = () => {
    return (
      <Router>
        <BrandList />
      </Router>
    );
  };

  it("renders without crashing", () => {
    const { getByTestId } = render(<BrandListContainer />);
    expect(getByTestId("search-box")).not.toBeNull();
  });

  it("input field value onchange", () => {
    const { getByTestId } = render(<BrandListContainer />);
    const input = screen.getByLabelText(/Search your car here/i);
    fireEvent.change(input, { target: { value: "Agera" } });
    expect(input).toHaveValue("Agera");
    expect(getByTestId("car-detail-container")).not.toBeNull();
  });

  it("BrandList renders correctly snapshot test", () => {
    const rendered = renderer.create(
      <Router>
        <BrandList />
      </Router>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
