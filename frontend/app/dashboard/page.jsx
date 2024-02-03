"use client";
import Card from "../ui/dashboard/card/card";
import TablaDatos from "../ui/dashboard/datos/tabla-datos";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import { useEffect, useState } from "react";
import { fetchCards, fetchWithGet } from "../lib/data";

const Dashboard = () => {
  const [card_data, setCardData] = useState([]);
  const [table_data, setTableData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const responseCards = await fetchWithGet('api/datos/1');
        const responseTrips = await fetchWithGet('api/datos/');
        
        setCardData(responseCards);
        setTableData(responseTrips);
        console.log(card_data);
        console.log(table_data);
      } catch (error) {
        setError(error.message);
      }
    };

    // Llama a la función para obtener los datos cuando el componente se monta
    obtenerDatos();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card title="Temperatura" number={card_data.temperatura + '°C'} porcentaje='12%' description='mas que la semana pasada'/>
          <Card title="Humedad" number={card_data.humedad + '%'}  porcentaje='33%' description='menos que la semana pasada'/>
          <Card title="Humedad del suelo" number={card_data.hum_suelo + '%'} porcentaje='25%' description='mas que la semana pasada'/>
        </div>
        <TablaDatos data={table_data}/>
        <Chart data={table_data} />
      </div>
    </div>
  );
};

export default Dashboard;
