import React from "react";
import renderer from "react-test-renderer";
import CarListComp from "../CarListComp";
import { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { data } from "../../constants/appConstants";
import Enzyme from "enzyme";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Cars } from "../../container/types";
import userEvent from "@testing-library/user-event";

Enzyme.configure({ adapter: new Adapter() });

const carList: Cars[] = [
  {
    name: "Car-1",
    id: "Car_1",
    image: "m3m-lnR90uM",
    price: "20000000",
    cc: "998 cc",
    type: "Manual",
    fuelType: "Petrol",
    speed: "25.24 kmpl",
  },
  {
    name: "Car-2",
    id: "Car_2",
    image: "vw0AmpZvHZg",
    price: "20000000",
    cc: "500 cc",
    type: "Automatic",
    fuelType: "Diesel",
    speed: "10.24 kmpl",
  },
  {
    name: "Car-3",
    id: "Car_3",
    image: "p7tai9P7H-s",
    price: "20000000",
    cc: "500 cc",
    type: "Automatic",
    fuelType: "Diesel",
    speed: "10.24 kmpl",
  },
  {
    name: "Car-4",
    id: "Car_4",
    image: "fwYZ3B_QQco",
    price: "20000000",
    cc: "500 cc",
    type: "Automatic",
    fuelType: "Diesel",
    speed: "10.24 kmpl",
  },
  {
    name: "Car-5",
    id: "Car_5",
    image: "N7RiDzfF2iw",
    price: "20000000",
    cc: "998 cc",
    type: "Manual",
    fuelType: "Petrol",
    speed: "25.24 kmpl",
  },
  {
    name: "Car-6",
    id: "Car_6",
    image: "qyfco1nfMtg",
    price: "20000000",
    cc: "998 cc",
    type: "Manual",
    fuelType: "Petrol",
    speed: "25.24 kmpl",
  },
  {
    name: "Car-7",
    id: "Car_7",
    image: "3ZUsNJhi_Ik",
    price: "20000000",
    cc: "500 cc",
    type: "Automatic",
    fuelType: "Diesel",
    speed: "10.24 kmpl",
  },
  {
    name: "Car-8",
    id: "Car_8",
    image: "f_SDCASisgs",
    price: "20000000",
    cc: "500 cc",
    type: "Automatic",
    fuelType: "Diesel",
    speed: "10.24 kmpl",
  },
  {
    name: "Car-9",
    id: "Car_9",
    image: "X16zXcbxU4U",
    price: "20000000",
    cc: "998 cc",
    type: "Manual",
    fuelType: "Petrol",
    speed: "25.24 kmpl",
  },
];

describe("CarListComp component should render properly", () => {
  const setShowSuccess: any = jest.fn();
  test("renders without crashing", () => {
    render(
      <Router>
        <CarListComp carDetails={carList} setShowSuccess={setShowSuccess} />
      </Router>
    );
  });

  it("CarListComp renders correctly snapshot test", () => {
    const rendered = renderer.create(
      <Router>
        <CarListComp carDetails={carList} setShowSuccess={setShowSuccess} />
      </Router>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
