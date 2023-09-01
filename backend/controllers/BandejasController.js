const bandejas = require("../models/BandejaModel.js");

const getAllBandejas = async (req, res) => {
  try {
    const allBandejas = await bandejas.find({});
    res.json(allBandejas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBandejaById = async (req, res) => {
  try {
    const bandeja = await bandejas.findById(req.params.id);
    res.json(bandeja);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBandeja = async (req, res) => {
  try {
    const newBandeja = new bandejas(req.body);
    const bandeja = await newBandeja.save();
    res.status(201).json(bandeja);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBandeja = async (req, res) => {
  try {
    const bandeja = await bandejas.findById(req.params.id);
    bandeja.title = req.body.title;
    const updatedBandeja = await bandeja.save();
    res.json(updatedBandeja);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBandeja = async (req, res) => {
  try {
    const bandeja = await bandejas.findById(req.params.id);
    await bandeja.remove();
    res.json({ message: "Bandeja deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBandejas,
  getBandejaById,
  createBandeja,
  updateBandeja,
  deleteBandeja,
};
