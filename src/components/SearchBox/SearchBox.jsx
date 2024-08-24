import css from "./SearchBox.module.css";

function SearchBox({ filterValue, setFilterValue }) {
  const handleFilter = (searchEvent) => {
    setFilterValue(searchEvent.target.value);
  };

  return (
    <label className={css.searchBox}>
      <span>Find contact by name</span>
      <input
        className={css.searchInput}
        type="text"
        value={filterValue}
        onChange={handleFilter}
        required
      ></input>
    </label>
  );
}

export default SearchBox;
