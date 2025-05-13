import Farm from "../models/farm.model.js";

export const getFarms = async (req, res) => {
  const farms = await Farm.find();
  res.json(farms);
};

export const createFarm = async (req, res) => {
  const farm = new Farm(req.body);
  await farm.save();
  res.status(201).json(farm);
};

export const deleteFarm = async (req, res) => {
  const { id } = req.params;
  await Farm.findByIdAndDelete(id);
  res.json({ message: "Farm deleted" });
};
