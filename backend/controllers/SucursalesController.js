const sucursales = require("../models/SucursalModel.js");

const getAllSucursales = async (req, res) => {
  try {
    const allSucursales = await sucursales.find({});
    res.json(allSucursales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSucursalById = async (req, res) => {
  try {
    const sucursal = await sucursales.findById(req.params.id);
    res.json(sucursal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSucursal = async (req, res) => {
  try {
    const newSucursal = new sucursales(req.body);
    const sucursal = await newSucursal.save();
    res.status(201).json(sucursal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateSucursal = async (req, res) => {
  try {
    const sucursal = await sucursales.findById(req.params.id);
    sucursal.title = req.body.title;
    const updatedSucursal = await sucursal.save();
    res.json(updatedSucursal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteSucursal = async (req, res) => {
  try {
    const sucursal = await sucursales.findById(req.params.id);
    await sucursal.remove();
    res.json({ message: "Sucursal deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllSucursales,
  getSucursalById,
  createSucursal,
  updateSucursal,
  deleteSucursal,
};
