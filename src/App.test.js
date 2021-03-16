import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import { shallow, mount } from "enzyme";

test("App component should have a div with className App", () => {
  const component = shallow(<App />);
  const container = component.find("div");
  const containerProp = container.props();
  // expect(container).toHaveLength(1);
  expect(containerProp.className).toEqual("App");
});
