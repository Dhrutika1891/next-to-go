import axios from "axios";

export const getRacesData = async () => {
  const { data: response } = await axios.get(
    "https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10"
  );
  return response.data;
};
