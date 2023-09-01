const termicos = require("../models/TermicoModel.js");

const getAllTermicos = async (req, res) => {
  try {
    const allTermicos = await termicos.find({});
    res.json(allTermicos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTermicoById = async (req, res) => {
  try {
    const termico = await termicos.findById(req.params.id);
    res.json(termico);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTermico = async (req, res) => {
  try {
    const newTermico = new termicos(req.body);
    const termico = await newTermico.save();
    res.status(201).json(termico);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTermico = async (req, res) => {
  try {
    const termico = await termicos.findById(req.params.id);
    termico.title = req.body.title;
    const updatedTermico = await termico.save();
    res.json(updatedTermico);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTermico = async (req, res) => {
  try {
    const termico = await termicos.findById(req.params.id);
    await termico.remove();
    res.json({ message: "Termico deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTermicos,
  getTermicoById,
  createTermico,
  updateTermico,
  deleteTermico,
};
