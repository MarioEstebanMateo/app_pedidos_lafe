const softs = require("../models/SoftModel.js");

const getAllSofts = async (req, res) => {
  try {
    const allSofts = await softs.find({});
    res.json(allSofts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSoftById = async (req, res) => {
  try {
    const soft = await softs.findById(req.params.id);
    res.json(soft);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSoft = async (req, res) => {
  try {
    const newSoft = new softs(req.body);
    const soft = await newSoft.save();
    res.status(201).json(soft);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateSoft = async (req, res) => {
  try {
    const soft = await softs.findById(req.params.id);
    soft.title = req.body.title;
    const updatedSoft = await soft.save();
    res.json(updatedSoft);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteSoft = async (req, res) => {
  try {
    const soft = await softs.findById(req.params.id);
    await soft.remove();
    res.json({ message: "Soft deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllSofts,
  getSoftById,
  createSoft,
  updateSoft,
  deleteSoft,
};
