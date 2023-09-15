import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  const realizarPedido = async (e) => {
    e.preventDefault();
    const sucursal = document.getElementById("sucursalSelect").value;
    const helados = document.querySelectorAll(".heladosContainer");
    const pedido = [];
    helados.forEach((helado) => {
      const quantity = helado.querySelector(".quantityInput input").value;
      if (quantity > 0) {
        pedido.push({
          id: helado.id,
          quantity: quantity,
        });
      }
    });
    if (sucursal === "") {
      swal2.fire({
        icon: "error",
        title: "Error",
        text: "Selecciona una sucursal",
      });
    } else if (pedido.length === 0) {
      swal2.fire({
        icon: "error",
        title: "Error",
        text: "Selecciona al menos un producto",
      });
    } else {
      try {
        const order = await axios.post(
          "https://app-pedidos-lafe-api.vercel.app/api/pedidos",
          {
            sucursal: sucursal,
            pedido: pedido,
          }
        );
        window.location.href = `/pedido/${order.data._id}`;
      } catch (error) {
        swal2.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.message,
        });
      }
    }
  };

  //when you change the quantity of a product, it will update the quantity in the helados state

  const handleQuantityChange = (e, id) => {
    const newHelados = [...helados];
    const index = newHelados.findIndex((helado) => helado._id === id);
    newHelados[index].quantity = e.target.value;
    setHelados(newHelados);
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
        <button className="btn btn-primary" onClick={realizarPedido}>
          Realizar Pedido
        </button>
      </div>
    </div>
  );
};

export default Home;
