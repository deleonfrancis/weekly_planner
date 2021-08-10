import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function SearchHistorySection() {
  const { searchHistory } = useSelector((state) => state.weatherReducer);

  useEffect(() => {
    console.log(searchHistory);
  }, [searchHistory]);

  return (
    <div>
      {searchHistory.map((search) => {
        return <div> {search.searchInfo} </div>;
      })}
    </div>
  );
}

export default SearchHistorySection;
