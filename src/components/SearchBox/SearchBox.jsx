import css from "./SearchBox.module.css";
const SearchBox = ({ filter, onChange }) => {
  return (
    <div className={css.box}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
