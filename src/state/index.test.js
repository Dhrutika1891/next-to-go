import reducerForRaces, { initialState, setStatus } from ".";
import { setRaces } from "./races";

describe("race state", () => {
  it("should set status via reducer", async () => {
    expect.hasAssertions();

    const nextState = reducerForRaces(initialState, setStatus("SUCCESS"));

    expect(nextState.status).toStrictEqual("SUCCESS");
  });

  it("should match states with/without reducer for races", () => {
    expect.hasAssertions();

    const racesData = {
      races: [
        {
          advertised_start: {
            seconds: 1614429120,
          },
          category_id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
          isExpired: false,
          meeting_id: "fb2eb7ac-77b7-47dd-bd09-b6accb9db48c",
          meeting_name: "Cannington",
          race_form: {},
          race_id: "f9f14b20-aac5-4d29-8903-70618ae8f46d",
          race_name: "Wednesday $20 Burger Beer Bet",
          race_number: 5,
          venue_country: "AUS",
          venue_id: "9b3705d7-d2f4-43ce-97ba-5dde4d3bce77",
          venue_name: "Cannington",
          venue_state: "WA",
        },
        {
          advertised_start: {
            seconds: 1614429960,
          },
          category_id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
          isExpired: false,
          meeting_id: "514af472-4d7e-4c0e-82d7-2f93e96af16c",
          meeting_name: "Romford Bags",
          race_form: {},
          race_id: "e275f2c4-0ee3-47b0-bed3-27d27e15985f",
          race_name: "400Mtrs (A6)",
          race_number: 11,
          venue_country: "UK",
          venue_id: "559f865c-f6e5-47e0-8881-fe6c92f4a508",
          venue_name: "Romford Bags",
          venue_state: "UK",
        },
      ],
    };

    const nextState = reducerForRaces(initialState, setRaces(racesData));

    expect(nextState.racesPageData).toStrictEqual(racesData);
  });
});
