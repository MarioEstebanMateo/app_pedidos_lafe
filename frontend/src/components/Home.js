import React, { useEffect, useState } from "react";
import axios from "axios";
import swal2 from "sweetalert2";

import "./Home.css";

const Home = () => {
  const [helados, setHelados] = useState([]);
  const [postres, setPostres] = useState([]);
  const [bandejas, setBandejas] = useState([]);
  const [termicos, setTermicos] = useState([]);
  const [sucursales, setSucursales] = useState([]);

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

      const sucursales = await axios.get(
        "https://app-pedidos-lafe-api.vercel.app/api/sucursales"
      );
      setSucursales(sucursales.data);
    } catch (error) {
      swal2.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    }
  };

  const imprimiryenviarpedido = async () => {
    try {
      const sucursal = document.getElementById("sucursalSelect").value;
      const helados = document.getElementById("heladosSelect").value;
      const postres = document.getElementById("postresSelect").value;
      const bandejas = document.getElementById("bandejasSelect").value;
      const termicos = document.getElementById("termicosSelect").value;

      const pedido = {
        sucursal: sucursal,
        helados: helados,
        postres: postres,
        bandejas: bandejas,
        termicos: termicos,
      };

      const pedidoenviado = await axios.post(
        "https://app-pedidos-lafe-api.vercel.app/api/pedidos",
        pedido
      );
      swal2.fire({
        icon: "success",
        title: "Pedido Enviado",
        text: pedidoenviado.data.message,
      });
    } catch (error) {
      swal2.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    }
  };

  useEffect(() => {
    gethelados();
  }, []);

  return (
    <div className="container-fluid">
      <div className="homeTitle">
        <p>Pedido de Sucursal de La Fe</p>
      </div>
      <div className="sucursalContainer">
        <select id="sucursalSelect">
          <option value="">Selecciona tu Sucursal</option>
          {sucursales.map((sucursal) => (
            <option key={sucursal._id} value={sucursal.id}>
              {sucursal.title}
            </option>
          ))}
        </select>
      </div>
      <div className="categoryTitle">
        <p>Helados</p>
      </div>
      <div>
        {helados.map((helado) => (
          <div className="heladosContainer" key={helado._id}>
            <div className="productoTitle">
              <p>{helado.title}</p>
            </div>
            <div className="quantityInput">
              <input type="number" min="0" />
            </div>
          </div>
        ))}
      </div>
      <div className="buttonContainer text-center">
        <button className="btn btn-primary onClick={imprimiryenviarpedido}">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Home;
