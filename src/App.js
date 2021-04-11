import PageItem from "./page/components/PageItem";
import React, { useState } from "react";
import useFetch from "./common/hooks/useFetch";
import peopleData from "./people.json";
import SearchField from "./common/components/SearchField";
import { button_name_filter as btn_arr } from "./common/constants/button_name";
import { api_urls as api } from "./common/constants/api";
import Spinner from "./common/components/Spinner";
import { titles } from "./common/constants/title";
/**IMPORTANT MESSAGE !!!!!!!!
 * BY THE TIME THE PROJECT UPLOADED TO GITHUB THE SWAPI SERVER WENT DOWN
 * SO I MADE SOME MOCK DATA SO THAT YOU CAN SEE THE INNER LOGIC OF MY APP
 * ANYWAY, I LEFT THE API FETCTHIG LOGIC ALSO SO YOU COULD MAKE IMPRESSION OF IT
 *
 *
 */
function App() {
  const buttonArray = [
    btn_arr.NAME,
    btn_arr.GENDER,
    btn_arr.HEIGHT,
    btn_arr.EYE_COLOR,
  ];
  const [searchResults, setSearchResults] = useState(null);
  /* const people = useFetch(`${api.BASE_URL}/${api.PEOPLE}`); */
  /* const films = useFetch(`${api.BASE_URL}/${api.FILMS}`);
  const species = useFetch(`${api.BASE_URL}/${api.SPECIES}`); */

  /**change back here */
  if (!peopleData.flat()) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className=" container">
      <h3>{titles.MAIN_TITLE}</h3>

      <div className="row ">
        <SearchField
          buttonArray={buttonArray}
          /**change back here */
          database={peopleData.flat()}
          getFilteredData={(data) => setSearchResults(data)}
        />
      </div>
      <div className="row ">
        <PageItem
          /**change back here */
          data={searchResults ? searchResults : peopleData.flat()}
          pageCount={
            searchResults
              ? Math.ceil(parseFloat(searchResults.length / 10))
              : /**change back here */
                Math.ceil(peopleData.flat().length / 10)
          }
          /* filmsList={films}
          speciesList={species} */
        />
      </div>
    </div>
  );
}

export default App;
