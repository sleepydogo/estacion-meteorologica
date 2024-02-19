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
