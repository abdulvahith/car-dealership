import React from "react";
import renderer from "react-test-renderer";
import CarList from "../CarList";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("CarListComp component should render properly", () => {
  test("renders without crashing", () => {
    render(
      <Router>
        <CarList />
      </Router>
    );
  });

  it("CarList renders correctly snapshot test", () => {
    const rendered = renderer.create(
      <Router>
        <CarList />
      </Router>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
