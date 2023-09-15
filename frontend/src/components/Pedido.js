import React from "react";
import axios from "axios";
import swal2 from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./Pedido.css";

const Pedido = () => {
  const navigate = useNavigate();

  const params = useParams();

  const [pedido, setPedido] = React.useState([]);

  React.useEffect(() => {
    getPedido();
  }, []);

  const getPedido = async () => {
    try {
      const pedido = await axios.get(
        `https://app-pedidos-lafe-api.vercel.app/api/pedidos/${params.id}`
      );
      setPedido(pedido.data);
      console.log(pedido.data);
    } catch (error) {
      console.log(error);
    }
  };

  const volverAlPedido = () => {
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="pedidoContainer">
        <p className="pedidoSucursalTitle">
          Pedido de Sucursal: {pedido.sucursal}
        </p>
        <p>Numero de Pedido: {params.id}</p>
      </div>
      <div>
        <button onClick={volverAlPedido}>Volver al Pedido</button>
      </div>
    </div>
  );
};

export default Pedido;
