import mongoose from "mongoose";

const farmSchema = new mongoose.Schema({
  name: String,
  location: String,
  cropType: String,
  sensorData: {
    temperature: Number,
    humidity: Number,
    soilMoisture: Number
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Farm", farmSchema);
