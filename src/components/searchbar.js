const SearchBar = ({ placeholder, onChange }) => {
  return (
    <>
      <span>
        Find countries
      </span>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default SearchBar;
