// Dashboard
export const fetchUsers = async () => {
  try {
    const users = await fetch(`${process.env.API_URL}/`);
  } catch {}
};

// DASHBOARD
export const fetchCards = async () => {
  try {
    let jwt_token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}mod/dashboard/cards`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt_token}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("DATA DESDE EL SERVICIO: ", data);
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return null;
  }
};

export const fetchWithGet = async (url) => {
  try {
    let jwt_token = localStorage.getItem("token");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return null;
  }
};

export const fetchAccountDetail = async (url, email) => {
  console.log(url, email);
  try {
    let jwt_token = localStorage.getItem("token");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return null;
  }
};

export const postSuspendUser = async (email, suspencion) => {
  try {
    suspencion = suspencion.toString();
    suspencion = suspencion.charAt(0).toUpperCase() + suspencion.slice(1);
    console.log("suspender --> ", email, suspencion);
    let jwt_token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}mod/user/suspender`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt_token}`,
        },
        body: JSON.stringify({
          email: email,
          suspender: suspencion,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return null;
  }
};

export const postActualizarConductor = async (data) => {
  try {
    suspencion = suspencion.toString();
    suspencion = suspencion.charAt(0).toUpperCase() + suspencion.slice(1);
    console.log("suspender --> ", email, suspencion);
    let jwt_token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}mod/user/suspender`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt_token}`,
        },
        body: JSON.stringify({}),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return null;
  }
};

export const postEliminarCuenta = async (email) => {
  try {
    console.log("suspender --> ", email);
    let jwt_token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}mod/user/eliminar`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt_token}`,
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return null;
  }
};

export const postCrearConductor = async (data) => {
  try {
    console.log(data);
    console.log(JSON.stringify(data));
    let jwt_token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}mod/conductor/crear`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt_token}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (response != null && response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return null;
  }
};
export const postCrearModerador = async (data) => {
  try {
    console.log(data);
    console.log(JSON.stringify(data));
    let jwt_token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}mod/administracion/crear`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt_token}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (response != null && response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return error;
  }
};

export const postDetalleViaje = async (id) => {
  try {
    let jwt_token = localStorage.getItem("token");
    let data ={
      'id': `${id}`
    }
    data = JSON.stringify(data);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}mod/viaje/detalle`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt_token}`,
        },
        body: data
      }
    );
    if (response != null) {
      const data = await response.json();
      console.log(data)
      return data;
    } else {
      console.log('errorrrrr')
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return error;
  }
};



export const postEliminarViaje = async (id) => {
  try {
    let jwt_token = localStorage.getItem("token");
    let data ={
      'id': `${id}`
    }
    data = JSON.stringify(data);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}mod/viaje/eliminar`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt_token}`,
        },
        body: data
      }
    );
    if (response != null) {
      const data = await response.json();
      console.log(data)
      return data;
    } else {
      console.log('errorrrrr')
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return error;
  }
};