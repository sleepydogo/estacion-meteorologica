"use client";
import Card from "../ui/dashboard/card/card";
import TablaDatos from "../ui/dashboard/datos/tabla-datos";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import { useEffect, useState } from "react";
import { fetchCards, fetchWithGet } from "../lib/data";
import WebSocket from 'websocket';

const Dashboard = () => {
  const [card_data, setCardData] = useState([]);
  const [table_data, setTableData] = useState([]);
  const [error, setError] = useState(null);

  const connectWebSocket = () => {
    useEffect(() => {
      const client = new WebSocket.w3cwebsocket('ws://localhost:8000/ws/endpoint/'); // Reemplaza la URL con la URL de tu servidor websocket
      client.onopen = () => {
        console.log('Conexión establecida con el servidor websocket');
      };
      client.onmessage = (message) => {
        console.log('Mensaje recibido del servidor websocket:', message.data);
        // Aquí puedes manejar el mensaje recibido según tus necesidades
      };
      client.onerror = (error) => {
        console.error('Error en la conexión websocket:', error);
      };
      client.onclose = () => {
        console.log('Conexión websocket cerrada');
      };
  
      // Cuando el componente se desmonta, cierra la conexión websocket
      return () => {
        client.close();
      };
    }, []);
  
    return null; // Esta función no renderiza nada en el DOM
  };

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        let responseCards = await fetchWithGet('api/datos/1');
        let responseTrips = await fetchWithGet('api/datos/');
        responseTrips = responseTrips.reverse()
        responseCards = responseTrips[0]


        setCardData(responseCards);
        setTableData(responseTrips);
        console.log(card_data);
        console.log(table_data);
      } catch (error) {
        setError(error.message);
      }
    };

    obtenerDatos();
  
    const intervalId = setInterval(obtenerDatos, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card title="Temperatura" number={card_data.TA + '°C'} porcentaje='12%' description='mas que la semana pasada' />
          <Card title="Humedad" number={card_data.HA + '%'} porcentaje='33%' description='menos que la semana pasada' />
          <Card title="Humedad del suelo" number={card_data.HS + '%'} porcentaje='25%' description='mas que la semana pasada' />
          <Card title="Temperatura del suelo" number={card_data.TS + '°C'} porcentaje='15%' description='mas que la semana pasada' />
        </div>
        <Chart data={table_data.slice(0,10).reverse()} />
        <TablaDatos data={table_data} />

      </div>
    </div>
  );
};

export default Dashboard;
