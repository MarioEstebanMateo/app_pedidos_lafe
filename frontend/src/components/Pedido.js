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

  const enviarPedido = async () => {
    swal2
      .fire({
        title: "¿Estas seguro?",
        text: "Una vez enviado el pedido no se podra modificar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, enviar",
        cancelButtonText: "No, cancelar",
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.put(
              `https://app-pedidos-lafe-api.vercel.app/api/pedidos/${params.id}`,
              {
                estado: "Enviado",
              }
            );
            swal2.fire("Enviado!", "El pedido fue enviado.", "success");
            navigate("/");
          } catch (error) {
            swal2.fire({
              icon: "error",
              title: "Error",
              text: error.response.data.message,
            });
          }
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="pedidoContainer text-center">
        <p className="pedidoSucursalTitle text-center">
          Pedido de Sucursal: {pedido.sucursal}
        </p>
        <p>Numero de Pedido: {params.id}</p>
      </div>
      <div className="pedidoContainer">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {pedido.pedido?.map((item) => (
              <tr key={item._id}>
                <td>{item.nombre}</td>
                <td>{item.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={enviarPedido}>
          Enviar Pedido
        </button>
      </div>
    </div>
  );
};

export default Pedido;
