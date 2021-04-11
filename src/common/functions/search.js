import filmsData from "../../films.json";
import speciesData from "../../species.json";

export function searchFilmByUrl(filmsArr) {
  const filteredArray = filmsData.filter((film) => {
    if (filmsArr.includes(film.url)) {
      return true;
    }
  });
  const data = filteredArray.map((film) => film.title);

  return data;
}

export function searchSpeciesByUrl(speciesArr) {
  if (!speciesArr.length) {
    return "Unknown";
  }
  const filteredArray = speciesData.filter((species) => {
    if (speciesArr.includes(species.url)) {
      return true;
    }
  });
  const data = filteredArray.map((species) => species.name);

  return data;
}
