import axios from "axios";
import ItemWebsite from "../../UI/Icons/Item/ItemWebsite/ItemWebsite";
import SearchIcon from "../../UI/Icons/Search/SearchIcon";
import "./Search.scss";

const Search = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchWord = e.target.searchVal.value;
    axios.get(`http://localhost:3001/search/${searchWord}`).then((res) => {
      props.searchResult(res.data[0].data);
    });
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              name="searchVal"
              className="form-control"
              placeholder="Search Here"
            />
            <button type="submit" className="input-group-text btn-success">
              <SearchIcon />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
