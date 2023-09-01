const postres = require("../models/PostreModel.js");

const getAllPostres = async (req, res) => {
  try {
    const allPostres = await postres.find({});
    res.json(allPostres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostreById = async (req, res) => {
  try {
    const postre = await postres.findById(req.params.id);
    res.json(postre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPostre = async (req, res) => {
  try {
    const newPostre = new postres(req.body);
    const postre = await newPostre.save();
    res.status(201).json(postre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePostre = async (req, res) => {
  try {
    const postre = await postres.findById(req.params.id);
    postre.title = req.body.title;
    const updatedPostre = await postre.save();
    res.json(updatedPostre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePostre = async (req, res) => {
  try {
    const postre = await postres.findById(req.params.id);
    await postre.remove();
    res.json({ message: "Postre deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPostres,
  getPostreById,
  createPostre,
  updatePostre,
  deletePostre,
};
