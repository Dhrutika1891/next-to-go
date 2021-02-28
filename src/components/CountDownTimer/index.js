import React from "react";
import Countdown from "react-countdown";

import RaceRow from "../RaceRow";

const renderer = ({ minutes, seconds, race, completed }) => {
  return (
    <RaceRow
      meetingName={race.meeting_name}
      raceNumber={race.race_number}
      countDown={`${completed ? "-" : ""}${minutes}:${seconds}`}
    />
  );
};

const CountDownTimer = ({ race }) => {
  return (
    <Countdown
      overtime={true}
      date={race.advertised_start?.seconds * 1000}
      renderer={(renderProps) => renderer({ ...renderProps, race })}
    />
  );
};

export default CountDownTimer;
