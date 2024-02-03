export const formatFecha = (fecha) => {
  const fechaObj = new Date(fecha);
  const opciones = { year: "numeric", month: "2-digit", day: "2-digit" };
  return fechaObj.toLocaleDateString("es-ES", opciones);
};

export const formatHora = (fecha) => {
  const fechaObj = new Date(fecha);
  const horas = fechaObj.getHours().toString().padStart(2, "0"); // Asegura que siempre tenga dos dígitos
  const minutos = fechaObj.getMinutes().toString().padStart(2, "0"); // Asegura que siempre tenga dos dígitos
  return `${horas}:${minutos}`;
};

export const filtrarCamposVacios = (objeto) => {
  const resultado = {};

  for (const clave in objeto) {
    if (
      objeto.hasOwnProperty(clave) &&
      objeto[clave] !== null &&
      objeto[clave] !== undefined &&
      objeto[clave] !== ""
    ) {
      resultado[clave] = objeto[clave];
    }
  }

  return resultado;
};


{/* 
  Esta funcion filtra un json descartando todas las claves que tengan 
  un valor nulo, vacio, NaN o undefined asociado.
*/}

export const filtrarCamposVaciosYNulos = async (jsonObj) => {
  for (const clave in jsonObj) {
    if ( jsonObj[clave] === undefined || jsonObj[clave] === null || jsonObj[clave] === "" || Number.isNaN(jsonObj[clave])) {
      delete jsonObj[clave];
    } else if (typeof jsonObj[clave] === "object") {
      eliminarCamposVacios(jsonObj[clave]);
      if (Object.keys(jsonObj[clave]).length === 0) {
        delete jsonObj[clave];
      }
    }
  }
  return jsonObj;
}

