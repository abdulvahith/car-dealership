import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

test("renders learn react link", () => {
  render(
    <Router>
      <App />
    </Router>
  );
});
