const pedidos = require("../models/PedidoModel.js");

const getAllPedidos = async (req, res) => {
  try {
    const allPedidos = await pedidos.find({});
    res.json(allPedidos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPedidoById = async (req, res) => {
  try {
    const pedido = await pedidos.findById(req.params.id);
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPedido = async (req, res) => {
  try {
    const newPedido = new pedidos(req.body);
    const pedido = await newPedido.save();
    res.status(201).json(pedido);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePedido = async (req, res) => {
  try {
    const pedido = await pedidos.findById(req.params.id);
    pedido.title = req.body.title;
    const updatedPedido = await pedido.save();
    res.json(updatedPedido);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePedido = async (req, res) => {
  try {
    const pedido = await pedidos.findById(req.params.id);
    await pedido.remove();
    res.json({ message: "Pedido deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPedidos,
  getPedidoById,
  createPedido,
  updatePedido,
  deletePedido,
};
