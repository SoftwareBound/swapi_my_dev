import React, { useEffect, useState } from "react";
import Button from "./Button";
import { getFilterMessage } from "../functions/filter";
import { error_messages_search as error } from "../constants/error_messages";
import { button_name_filter as btn } from "../constants/button_name";
import { placeholder_messages as placeholder } from "../constants/placeholder_messages";

const Search = ({ buttonArray, database, getFilteredData }) => {
  const [searchFilter, setSearchFilter] = useState(null);
  const [searchFilterValue, setSearchFilterValue] = useState("");
  const [placeholderMessage, setPlaceholderMessage] = useState(
    placeholder.DEFAULT_MESSAGE
  );
  useEffect(() => {
    if (searchFilter) {
      setPlaceholderMessage(getFilterMessage(searchFilter));
    }
  }, [searchFilter]);

  const filterData = () => {
    if (!searchFilter) {
      alert(error.FILTER_MISSING);
      return;
    }
    if (!searchFilterValue) {
      alert(error.VALUE_MISSING);
      return;
    }

    const filteredData = database.filter((entity) => {
      if (
        searchFilter === btn.NAME.toLowerCase() ||
        searchFilter === btn.EYE_COLOR.toLowerCase()
      ) {
        if (
          entity[`${searchFilter}`]
            .toString()
            .toLowerCase()
            .includes(searchFilterValue)
        ) {
          return true;
        }
      }
      if (searchFilter === btn.GENDER.toLowerCase()) {
        if (
          entity[`${searchFilter}`].toString().toLowerCase() ===
          searchFilterValue
        ) {
          return true;
        }
      }
      if (searchFilter === btn.HEIGHT.toLowerCase()) {
        const valueToArr = searchFilterValue.toString().split("-");
        if (
          !Number.isInteger(valueToArr[0]) ||
          !Number.isInteger(valueToArr[1])
        ) {
          console.log("not");
          return false;
        }
        const minHeight = Math.min.apply(null, valueToArr);
        const maxHeight = Math.max.apply(null, valueToArr);
        if (
          entity[`${searchFilter}`] >= minHeight &&
          entity[`${searchFilter}`] <= maxHeight
        ) {
          return true;
        }
      }
    });

    getFilteredData(filteredData);
  };
  const getSearchFilter = (filter) => {
    let filtered = filter;
    if (filter === btn.EYE_COLOR.toLowerCase()) {
      filtered = filter.replace(" ", "_");
    }

    setSearchFilter(filtered);
  };
  return (
    <div className="container mb-2">
      <div className="">
        <input
          type="text"
          placeholder={placeholderMessage}
          style={{ float: "left", width: "30%" }}
          value={searchFilterValue}
          onChange={(e) => {
            setSearchFilterValue(e.target.value);
          }}
        />
        <button
          type="sumbit"
          className=" btn btn-primary btn-sm"
          onClick={filterData}
        >
          Submit
        </button>
      </div>

      <div className="">
        {buttonArray.length !== 0
          ? buttonArray.map((attribute) => {
              return (
                <div
                  key={attribute}
                  className="mt-2  "
                  style={{ float: "left" }}
                >
                  <Button attribute={attribute} getFilter={getSearchFilter} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Search;
