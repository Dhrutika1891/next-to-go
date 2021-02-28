import React, { useEffect, useState } from "react";
import moment from "moment";
import useThunkReducer from "react-hook-thunk-reducer";
import { isEmpty, map } from "lodash";

import { getRaces, expireRaces } from "../../state/races";
import reducerForRaces, { initialState } from "../../state";
import PageStatus from "../../components/PageStatus";
import CategoriesRadio from "../../components/CategoriesRadio";
import RaceTable from "../../components/RaceTable";

import "./styles.scss";

const Race = () => {
  const reducer = useThunkReducer(reducerForRaces, initialState);

  const [state, dispatch] = reducer;

  const { status, racesPageData } = state;

  const [categoryValue, setCategoryValue] = useState("all");

  const races = racesPageData?.races || [];

  const activeRaces = races.filter((item) => !item.isExpired);

  const raceData =
    categoryValue === "all"
      ? activeRaces
      : activeRaces.filter((race) => race.category_id === categoryValue);

  useEffect(() => {
    dispatch(getRaces());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      const expiredRaceIds = activeRaces.filter(
        (item) =>
          moment
            .unix(item.advertised_start.seconds)
            .diff(moment(), "minutes") <= -1
      );
      if (!isEmpty(expiredRaceIds)) {
        dispatch(expireRaces(map(expiredRaceIds, "race_id")));
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, activeRaces]);

  const handleCategoryChange = (val) => setCategoryValue(val);

  if (status === "LOADING") return <PageStatus status="loading" />;
  if (status === "EMPTY") return <PageStatus status="empty" />;
  if (status === "ERROR") return <PageStatus status="error" />;

  return (
    <div className="race-page" data-testid="race-page">
      <h1>NEXT TO GO</h1>
      <CategoriesRadio
        value={categoryValue}
        handleChange={handleCategoryChange}
      />
      {raceData && raceData.length && <RaceTable raceData={raceData} />}
    </div>
  );
};

export default Race;
