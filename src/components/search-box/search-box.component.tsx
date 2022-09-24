import "./search-box.styles.scss";

/** search box component props */
type Props = {
  onChangeHandler: any;
  placeholder: string;
};
const SearchBox = ({ onChangeHandler, placeholder }: Props) => (
  <input
    type="search"
    className="search-box"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
