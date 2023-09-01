import React, { useEffect, useState } from "react";
import axios from "axios";
import swal2 from "sweetalert2";

import "./Home.css";

const Home = () => {
  const [helados, setHelados] = useState([]);
  const [postres, setPostres] = useState([]);
  const [bandejas, setBandejas] = useState([]);
  const [termicos, setTermicos] = useState([]);

  const gethelados = async () => {
    try {
      const helados = await axios.get(
        "https://app-pedidos-lafe-api.vercel.app/api/helados"
      );
      setHelados(helados.data);
      const postres = await axios.get(
        "https://app-pedidos-lafe-api.vercel.app/api/postres"
      );
      setPostres(postres.data);
      const bandejas = await axios.get(
        "https://app-pedidos-lafe-api.vercel.app/api/bandejas"
      );
      setBandejas(bandejas.data);
      const termicos = await axios.get(
        "https://app-pedidos-lafe-api.vercel.app/api/termicos"
      );
      setTermicos(termicos.data);
    } catch (error) {
      swal2.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    }
  };

  return (
    <div className="container-fluid">
      <div>
        <h2></h2>
      </div>
    </div>
  );
};

export default Home;
