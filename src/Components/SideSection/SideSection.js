import ItemDetail from "../Item/ItemDetail/ItemDetail";
import Search from "../Search/Search";

import "./SideSection.scss";

const SideSection = (props) => {
  const searchResultHandle = (val) => {
    props.searchResult(val);
  };
  return (
    <>
      <div className="side-section">
        <Search searchResult={searchResultHandle} />
        <ItemDetail selectedItem={props.selectedItem} />
      </div>
    </>
  );
};

export default SideSection;
