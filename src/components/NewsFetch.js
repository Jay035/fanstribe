export default async function NewsFetch() {
  const url =
    "https://sportapi7.p.rapidapi.com/api/v1/sport/football/events/live";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "sportapi7.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  //   return (
  //     <div>NewsFetch</div>
  //   )
}
