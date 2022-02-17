import React from "react";
import "./SearchPanel.css";

export const SearchPanel = () => {
  const searchText = "Type here to Search";

  return (
    <input className="form-control search-input" placeholder={searchText} />
  );
};
