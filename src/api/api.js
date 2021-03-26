const getPeople = () => (
  fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(result => result.results)
    .catch((error) => {
      throw new Error(error);
    })
);

export default getPeople;
