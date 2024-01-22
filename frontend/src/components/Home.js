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
  const [pedido, setPedido] = useState([]);

  useEffect(() => {
    gethelados();
  }, []);

  useEffect(() => {
    emptyPedido();
  }, []);

  const emptyPedido = () => {
    setPedido([]);
  };

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

    const productos = document.querySelectorAll(".heladosContainer");

    productos.forEach((producto) => {
      const title = producto.querySelector(".productoTitle p").textContent;
      const quantity = producto.querySelector(".quantityInput input").value;
      let pedido = [];
      if (quantity > 0) {
        pedido.push({
          title: title,
          quantity: quantity,
        });
        console.log(pedido);
      }

      setPedido(pedido);
    });
    if (sucursal === "") {
      swal2.fire({
        icon: "error",
        title: "Error",
        text: "Selecciona una sucursal",
      });
    } else {
      try {
        const order = await axios.post(
          "https://app-pedidos-lafe-api.vercel.app/api/pedidos",
          {
            sucursal: sucursal,
            products: pedido,
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

  const handleQuantityChange = (e) => {
    const quantity = e.target.value;
    if (quantity < 0) {
      e.target.value = 0;
    }
  };

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
            <div className="quantityInput" onChange={handleQuantityChange}>
              <input type="number" min="0" />
            </div>
          </div>
        ))}
      </div>
      <div className="categoryTitle">
        <p>Postres</p>
      </div>
      <div>
        {postres.map((postre) => (
          <div className="heladosContainer" key={postre._id}>
            <div className="productoTitle">
              <p>{postre.title}</p>
            </div>
            <div className="quantityInput" onChange={handleQuantityChange}>
              <input type="number" min="0" />
            </div>
          </div>
        ))}
      </div>
      <div className="categoryTitle">
        <p>Bandejas</p>
      </div>
      <div>
        {bandejas.map((bandeja) => (
          <div className="heladosContainer" key={bandeja._id}>
            <div className="productoTitle">
              <p>{bandeja.title}</p>
            </div>
            <div className="quantityInput" onChange={handleQuantityChange}>
              <input type="number" min="0" />
            </div>
          </div>
        ))}
      </div>
      <div className="categoryTitle">
        <p>Termicos</p>
      </div>
      <div>
        {termicos.map((termico) => (
          <div className="heladosContainer" key={termico._id}>
            <div className="productoTitle">
              <p>{termico.title}</p>
            </div>
            <div className="quantityInput" onChange={handleQuantityChange}>
              <input type="number" min="0" />
            </div>
          </div>
        ))}
      </div>
      <div className="buttonContainer text-center mt-4 mb-4">
        <button className="btn btn-primary" onClick={realizarPedido}>
          Realizar Pedido
        </button>
      </div>
    </div>
  );
};

export default Home;
