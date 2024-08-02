import { React, useState } from "react";
import { SearchStyle } from "./Styled/SearchStyle";
import { CiSearch } from "react-icons/ci";

const Search = ({ handleSearch }) => {
  return (
    <SearchStyle>
      <CiSearch />
      <input type="text" placeholder="type to search" onChange={handleSearch} />
    </SearchStyle>
  );
};

export default Search;
