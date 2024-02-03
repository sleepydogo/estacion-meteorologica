
import { useRouter } from 'next/navigation';
import styles from './searchResult.module.css'


const SearchResult = ({result, route}) => {

    const router = useRouter();

    const handleNavigation = () => {
        console.log(result.email);
        router.push(`${route}/${result.email}`)
    }

    return (
        <div className={styles.result} onClick={handleNavigation}>{result.first_name} {result.last_name}</div>
    )
}

export default SearchResult;