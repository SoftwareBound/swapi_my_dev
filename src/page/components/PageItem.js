import React, { useEffect, useState } from "react";
import "../style/index.css";

import {
  searchFilmByUrl,
  searchSpeciesByUrl,
} from "../../common/functions/search";
import PeopleDetails from "./PeopleDetails";
import PeoplePagination from "./PeoplePagination";
import Pagination from "./Pagination";

const PageItem = ({ data, pageCount, filmsList, speciesList }) => {
  const [peopleInfo, setPeopleInfo] = useState();
  const [curPage, setCurPage] = useState(0);
  useEffect(() => {
    return () => {
      setPeopleInfo(null);
    };
  }, [curPage]);
  const indexOfLastData = (curPage + 1) * 10;
  const indexOfFirstData = indexOfLastData - 10;
  let currentData;
  if (data.length > 10) {
    currentData = data.slice(indexOfFirstData, indexOfLastData);
  } else {
    currentData = data;
  }

  const getInfo = (info) => {
    const {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
      films,
      species,
    } = info;
    const filmsData = searchFilmByUrl(films);
    const speciesData = searchSpeciesByUrl(species);

    /* const speciesData = searchSpeciesByUrl(speciesList);
    const filmsData = searchFilmByUrl(filmsList); */

    const dataArr = [
      ["Name", name],
      ["Height", height],
      ["Mass", mass],
      ["Hair color", hair_color],
      ["Skin color", skin_color],
      ["Films", filmsData],
      ["Eye color", eye_color],
      ["Birth year", birth_year],
      ["Gender", gender],
      ["Sepcies", speciesData],
    ];

    setPeopleInfo(dataArr);
  };
  const changePageNumber = (number) => {
    setCurPage(number - 1);
  };
  return (
    <div className=" ">
      <div className="row   ">
        {currentData.map((item) => (
          <ul
            className=" w-10 col-6"
            key={item.name}
            onClick={() => {
              getInfo(item);
            }}
          >
            <PeoplePagination name={item.name} />
          </ul>
        ))}
      </div>
      <Pagination numOfPages={pageCount} changePageNumber={changePageNumber} />
      <div>
        {peopleInfo
          ? peopleInfo.map((detail) => {
              return (
                <div key={detail[0]}>
                  <PeopleDetails details={[detail[0], detail[1]]} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default PageItem;
