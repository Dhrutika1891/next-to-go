export const initialState = {
  status: "LOADING",
};

export const setStatus = (status) => ({
  type: "set-status",
  status,
});

export const reducerForRaces = (state = initialState, action) => {
  switch (action.type) {
    case "set-status":
      return {
        ...state,
        status: action.status,
      };
    case "set-races":
      return {
        ...state,
        racesPageData: action.racesPageData,
      };
    default:
      return state;
  }
};

export default reducerForRaces;
