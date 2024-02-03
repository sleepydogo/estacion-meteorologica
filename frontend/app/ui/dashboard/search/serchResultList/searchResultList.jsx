import SearchResult from "../searchResult/searchResult";
import styles from "./searchResultList.module.css";

const SearchResultsList = ({ results, route }) => {
  return (
    <div className={styles.container}>
      {results.map((result, id) => {
        console.log(result, id);
        return <SearchResult result={result} route={route} key={result.email} />;
      })}
    </div>
  );
};

export default SearchResultsList;
