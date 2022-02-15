import React from "react";
import renderer from "react-test-renderer";
import BrandListComp from "../BrandListComp";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { data } from "../../constants/appConstants";
import Enzyme from "enzyme";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("BrandListComp component should render properly", () => {
  test("renders without crashing", () => {
    render(
      <Router>
        <BrandListComp data={data} />
      </Router>
    );
  });

  it("BrandListComp renders correctly snapshot test", () => {
    const rendered = renderer.create(
      <Router>
        <BrandListComp data={data} />
      </Router>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
