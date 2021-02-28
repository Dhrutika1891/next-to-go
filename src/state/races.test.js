import { getRaces, setRaces } from "./races";
import { setStatus } from ".";
import { getRacesData } from "../services/races";

jest.mock("../services/races", () => {
  return {
    getRacesData: jest.fn(),
  };
});

describe("races page state", () => {
  const racesPageData = {
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

  const racesResponse = {
    next_to_go_ids: [],
    race_summaries: {
      [`e275f2c4-0ee3-47b0-bed3-27d27e15985f`]: {
        advertised_start: { seconds: 1614429960 },
        category_id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
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
      [`f9f14b20-aac5-4d29-8903-70618ae8f46d`]: {
        advertised_start: { seconds: 1614429120 },
        category_id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
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
    },
  };

  it("should get data and build races page", async () => {
    expect.hasAssertions();

    getRacesData.mockResolvedValue(racesResponse);

    const dispatch = jest.fn();

    await getRaces()(dispatch, () => initialState);

    expect(dispatch).toHaveBeenNthCalledWith(1, setStatus("LOADING"));
    expect(dispatch).toHaveBeenNthCalledWith(2, setRaces(racesPageData));
    expect(dispatch).toHaveBeenNthCalledWith(3, setStatus("SUCCESS"));
  });

  it("should show error if anything goes wrong with get search data", async () => {
    expect.hasAssertions();

    getRacesData.mockRejectedValue({});

    const dispatch = jest.fn();

    await getRaces()(dispatch, () => initialState);

    expect(dispatch).toHaveBeenCalledWith(setStatus("ERROR"));
  });
});
