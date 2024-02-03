import styles from "./searchContainer.module.css";
import Search from "../search";
import SearchResultsList from "../serchResultList/searchResultList";
import { useState } from "react";

const SearchContainer = ({placeholder, url, route}) => {
  const [results, setResults] = useState([]);

  return (
    <div className={styles.container}>
      <Search setResults={setResults} url={url} placeholder={placeholder} />
      <SearchResultsList results={results} route={route}/>
    </div>
  );
};

export default SearchContainer;
