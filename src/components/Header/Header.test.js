import Header from "./Header";
import { shallow } from "enzyme";

test("Header should have text netflixroulette", () => {
  const component = shallow(<Header />);
  const container = component.find("div").find("h4");
  expect(container.text()).toEqual("netflixroulette");
});
