const helados = require("../models/HeladoModel.js");

const getAllHelados = async (req, res) => {
  try {
    const allHelados = await helados.find({});
    res.json(allHelados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getHeladoById = async (req, res) => {
  try {
    const helado = await helados.findById(req.params.id);
    res.json(helado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createHelado = async (req, res) => {
  try {
    const newHelado = new helados(req.body);
    const helado = await newHelado.save();
    res.status(201).json(helado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateHelado = async (req, res) => {
  try {
    const helado = await helados.findById(req.params.id);
    helado.title = req.body.title;
    const updatedHelado = await helado.save();
    res.json(updatedHelado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteHelado = async (req, res) => {
  try {
    const helado = await helados.findById(req.params.id);
    await helado.remove();
    res.json({ message: "Helado deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllHelados,
  getHeladoById,
  createHelado,
  updateHelado,
  deleteHelado,
};
