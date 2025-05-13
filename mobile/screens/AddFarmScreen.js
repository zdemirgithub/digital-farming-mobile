import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import axios from "axios";

export default function AddFarmScreen({ navigation }) {
  const [form, setForm] = useState({
    name: "",
    location: "",
    cropType: "",
  });

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/farms", {
        ...form,
        sensorData: {
          temperature: 25,
          humidity: 60,
          soilMoisture: 40,
        },
      });
      Alert.alert("Success", "Farm added");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to add farm");
    }
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl mb-4 font-bold">Add New Farm</Text>
      {["name", "location", "cropType"].map((field) => (
        <TextInput
          key={field}
          placeholder={field}
          className="border p-3 mb-3 rounded"
          value={form[field]}
          onChangeText={(val) => setForm({ ...form, [field]: val })}
        />
      ))}
      <TouchableOpacity onPress={handleSubmit} className="bg-green-600 p-3 rounded-xl">
        <Text className="text-white text-center font-bold">Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
