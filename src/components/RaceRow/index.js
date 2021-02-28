import React from "react";
import classNames from "classnames";

import "./styles.scss";

function RaceRow({ meetingName, raceNumber, countDown, className = "" }) {
  return (
    <div
      className={classNames("table-row", { [`${className}`]: className })}
      data-testid="table-row"
    >
      <div data-testid="table-column-1">{meetingName}</div>
      <div data-testid="table-column-2">{raceNumber}</div>
      <div data-testid="table-column-3">{countDown}</div>
    </div>
  );
}

export default RaceRow;
