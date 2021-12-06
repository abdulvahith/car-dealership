import React from "react";
import renderer from "react-test-renderer";
import BrandList from "../BrandList";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("BrandList component should render properly", () => {
  test("renders without crashing", () => {
    render(
      <Router>
        <BrandList />
      </Router>
    );
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
