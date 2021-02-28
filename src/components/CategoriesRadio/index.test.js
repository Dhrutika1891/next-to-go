import { render } from "@testing-library/react";
import React from "react";

import CategoriesRadio from ".";

describe("component categories radio", () => {
  it("should render categories radio", () => {
    expect.hasAssertions();

    const { getByTestId, queryAllByTestId, baseElement } = render(
      <CategoriesRadio value="1" handleChange={jest.fn()} />
    );

    const radioGroup = getByTestId("radio-group");
    expect(radioGroup).toBeInTheDocument();

    const radioOption = queryAllByTestId("radio-option");
    expect(radioOption.length).toBe(4);

    expect(baseElement).toMatchSnapshot();
  });
});
