const Thought = require('../models/thought.js');

exports.getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getThoughtById = async (req, res) => {
  const { id } = req.params;
  try {
    const thought = await Thought.findById(id);
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    res.json(thought);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createThought = async (req, res) => {
  try {
    const thought = new Thought(req.body);
    await thought.save();
    res.status(201).json(thought);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateThought = async (req, res) => {
  const { id } = req.params;
  try {
    const thought = await Thought.findByIdAndUpdate(id, req.body, { new: true });
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    res.json(thought);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteThought = async (req, res) => {
  const { id } = req.params;
  try {
    const thought = await Thought.findByIdAndDelete(id);
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    res.json({ message: 'Thought deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

