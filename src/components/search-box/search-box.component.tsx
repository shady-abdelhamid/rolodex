import { Component } from "react";
import "./search-box.component.css";

/** search box component props */
type Props = {
  onChangeHandler: any;
  placeholder: string;
};

export default class SearchBox extends Component<Props> {
  render() {
    const { onChangeHandler, placeholder } = this.props;

    return (
      <input
        type="search"
        className="search-box"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}
