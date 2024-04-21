import css from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.box}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
