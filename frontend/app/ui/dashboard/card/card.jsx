import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
import { fetchCards } from "@/app/lib/data";

const Card = ({ title, number, porcentaje, description, style }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        {[title, number] ? (
          <>
            <span className={styles.title}>{title}</span>
            <span className={styles.number}>{number}</span>
            <span className={styles.detail}>
              <span className={styles.positive}>{porcentaje}</span> {description}
            </span>
          </>
        ) : (
          <span>No hay datos disponibles</span>
        )}
      </div>
    </div>
  );
};

export default Card;
