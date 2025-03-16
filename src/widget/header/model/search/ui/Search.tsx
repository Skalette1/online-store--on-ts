import { SearchBar } from "antd-mobile";
import { useDispatch } from "react-redux";
import { setSearch } from "../model/searchReducer";
import "../../../styles/header.css";
export const Search = () => {
  const dispatch = useDispatch();
  const handleSearch = (value: string) => {
    dispatch(setSearch(value));
  };
  return (
    <div>
      <SearchBar onChange={handleSearch} className="search" />
    </div>
  );
};
