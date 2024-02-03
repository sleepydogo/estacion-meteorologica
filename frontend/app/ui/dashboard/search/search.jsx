import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import { fetchWithGet } from "@/app/lib/data";

const Search = ({ setResults, placeholder, url }) => {
  const [input, setInput] = useState("");
  
  const fetchData = (value) => {
    fetchWithGet(url)
      .then((response) => {
        if (url.includes("user")) {
          return response.results;  // Corregido: no es necesario asignar a response.results.json()
        } else {
          return response;
        }
      })
      .then((json) => {
        console.log(json)
        const results = json.filter((user) => {
          console.log(user.first_name.toLowerCase());
          return (
            value &&
            user &&
            user.first_name &&
            user.first_name.toLowerCase().includes(value.toLowerCase())  // Corregido: realizar comparación en minúsculas
          );
        });
        setResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
