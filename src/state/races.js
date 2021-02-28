import { map, isEmpty, sortBy } from "lodash";

import { setStatus } from ".";
import { getRacesData } from "../services/races";

export const setRaces = (racesPageData) => ({
  type: "set-races",
  racesPageData,
});

const transformRaces = (races) => {
  return (
    !isEmpty(races) &&
    map(sortBy(races.race_summaries, "advertised_start.seconds"), (item) => ({
      ...item,
      isExpired: false,
    }))
  );
};

export const getRaces = () => {
  return async (dispatch) => {
    dispatch(setStatus("LOADING"));

    try {
      const races = transformRaces(await getRacesData());

      const racesPageData = {
        races,
      };

      if (racesPageData) {
        dispatch(setRaces(racesPageData));
        dispatch(setStatus("SUCCESS"));
      } else {
        dispatch(setStatus("EMPTY"));
      }
    } catch (error) {
      dispatch(setStatus("ERROR"));
    }
  };
};

export const expireRaces = (expiredRaceIds = []) => {
  return async (dispatch, getState) => {
    const { racesPageData } = getState();

    dispatch(
      setRaces({
        ...racesPageData,
        races: racesPageData.races.map((race) =>
          expiredRaceIds.indexOf(race.race_id) === -1
            ? race
            : { ...race, isExpired: true }
        ),
      })
    );
  };
};
