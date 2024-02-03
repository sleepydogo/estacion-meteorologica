import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Estación meteorológica</div>
        <div className={styles.text}>@ Todos los derechos reservados.</div>
    </div>
  );
};

export default Footer;
