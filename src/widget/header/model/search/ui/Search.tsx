import { useDispatch } from "react-redux";
import { setSearch } from "../model/searchReducer";
import "../../../styles/header.css";

export const Search = () => {
  const dispatch = useDispatch();
  const handleSearch = (event: any) => {
    const value = event.target.value
    dispatch(setSearch(value));
  };
  return (
    <div>
      <input type="search" onChange={handleSearch} className="search" />
    </div>
  );
};
