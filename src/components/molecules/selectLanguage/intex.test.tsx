import React from "react";
import renderer, { act } from "react-test-renderer";
import SelectLanguage from "./index";

describe("SelectLanguage component", () => {
  test("renders correctly", () => {
    const props = {
      language: "en",
      changeLanguage: jest.fn(),
    };

    const componentSelect = renderer.create(<SelectLanguage {...props} />).toJSON();

    expect(componentSelect).toMatchSnapshot();
  })
});
;