"use client";
import styles from "./tabla-datos.module.css";

const TablaDatos = ({ data }) => {
  const formatFecha = (fecha) => {
    const fechaObj = new Date(fecha);
    const opciones = { year: "numeric", month: "2-digit", day: "2-digit" };
    return fechaObj.toLocaleDateString("es-ES", opciones);
  };

  const formatHora = (fecha) => {
    const fechaObj = new Date(fecha);
    const horas = fechaObj.getHours().toString().padStart(2, "0"); // Asegura que siempre tenga dos dígitos
    const minutos = fechaObj.getMinutes().toString().padStart(2, "0"); // Asegura que siempre tenga dos dígitos
    return `${horas}:${minutos}`;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ultimas mediciones</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>
              <strong>Id Medición</strong>
            </td>
            <td>
              <strong>Fecha</strong>
            </td>
            <td>
              <strong>Hora</strong>
            </td>
            <td>
              <strong>Temperatura</strong>
            </td>
            <td>
              <strong>Humedad</strong>
            </td>
            <td>
              <strong>Temperatura del suelo</strong>
            </td>
            <td>
              <strong>Humedad del suelo</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{formatFecha(dato.fecha)}</td>
                <td>{formatHora(dato.fecha)}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      dato.temperatura >= 30
                        ? styles.hot
                        : 30 >= dato.temperatura >= 10
                        ? styles.middle
                        : 10 >= dato.temperatura >= 0
                        ? styles.cold
                        : styles.reallycold
                    }`}
                  >
                    {dato.temperatura} °C
                  </span>
                </td>
                <td>{dato.humedad} %</td>
                <td>
                  {" "}
                  <span
                    className={`${styles.status} ${
                      dato.temp_suelo >= 30
                        ? styles.hot
                        : 30 >= dato.temp_suelo >= 10
                        ? styles.middle
                        : 10 >= dato.temp_suelo >= 0
                        ? styles.cold
                        : styles.reallycold
                    }`}
                  >
                    {dato.temp_suelo} °C
                  </span>
                </td>
                <td>{dato.hum_suelo} %</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatos;
