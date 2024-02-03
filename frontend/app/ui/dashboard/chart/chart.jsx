"use client";
import React, { PureComponent, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import styles from "./chart.module.css";
import { formatHora } from "@/app/utils/dataHelpers";

const Chart = ({ data }) => {
  const [polishData, setPolishData] = useState([]);
  const formatFecha = (fecha) => {
    const fechaObj = new Date(fecha);
    const opciones = { year: "numeric", month: "2-digit", day: "2-digit" };
    return fechaObj.toLocaleDateString("es-ES", opciones);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const formatData = data.map((item) => ({
        name: formatFecha(item.fecha) + formatHora(item.fecha),
        Fecha: formatFecha(item.fecha), // Renombrar y formatear la fecha
        Temperatura: item.temperatura,
        Humedad: item.humedad,
        "Temperatura Suelo": item.temp_suelo,
        "Humedad Suelo": item.hum_suelo,
      }));
      console.log(data);
      console.log(formatData);
      setPolishData(formatData);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gráfico de ultimas mediciones</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={5}
          height={3}
          data={polishData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Temperatura"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Humedad" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Temperatura Suelo" stroke="#eb4034" />
          <Line type="monotone" dataKey="Humedad Suelo" stroke="#2ac7af" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
