import { useDispatch } from "react-redux";
import { setSearch } from "../model/searchReducer";
import "../../../styles/header.css";
import { SearchBar } from "antd-mobile";
export const Search = () => {
  const dispatch = useDispatch();
  const handleSearch = (event: any) => {
    dispatch(setSearch(event));
  };
  return (
    <div>
      <SearchBar onChange={handleSearch} className="search" />
    </div>
  );
};
