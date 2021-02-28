import { render } from "@testing-library/react";
import React from "react";

import RaceRow from ".";

describe("component race row", () => {
  it("should render race row", () => {
    expect.hasAssertions();

    const { getByTestId, baseElement } = render(
      <RaceRow
        meetingName="meeting name"
        raceNumber={2}
        countDown="countdown time"
      />
    );

    const raceRow = getByTestId("table-row");
    const firstRow = getByTestId("table-column-1");
    const secondRow = getByTestId("table-column-2");
    const thirdRow = getByTestId("table-column-3");

    expect(raceRow).toBeInTheDocument();
    expect(firstRow).toBeInTheDocument();
    expect(firstRow).toHaveTextContent("meeting name");
    expect(secondRow).toBeInTheDocument();
    expect(secondRow).toHaveTextContent(2);
    expect(thirdRow).toBeInTheDocument();
    expect(thirdRow).toHaveTextContent("countdown time");

    expect(baseElement).toMatchSnapshot();
  });
});
