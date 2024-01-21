//Auth token we will use to generate a meeting and connect to it
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzNWExNzA0YS0wOTg4LTQ1NGUtODdlNy0wZDE2YTk1ODk5YTQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwNTc5MDEzNywiZXhwIjoxNzA2Mzk0OTM3fQ.3iMAaB-rmSEGxKXNRpnJWNulb9kzevePeadFfe2hnoU";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};