import React, { Fragment } from "react";
import { take } from "lodash";

import RaceRow from "../RaceRow";
import CountDownTimer from "../CountDownTimer";
import "./styles.scss";

function RaceTable({ raceData }) {
  const limitData = React.useMemo(() => take(raceData, 5), [raceData]);
  return (
    <div className="race-table" data-testid="race-table">
      <RaceRow
        meetingName="Meeting Name"
        raceNumber="Race Number"
        countDown="Count Down"
        className="table-title"
      />
      {limitData.map((race) => (
        <Fragment key={race.race_id}>
          <CountDownTimer race={race} />
        </Fragment>
      ))}
    </div>
  );
}

export default RaceTable;
