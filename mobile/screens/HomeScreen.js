import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [farms, setFarms] = useState([]);

  const fetchFarms = async () => {
    const res = await axios.get("http://localhost:5000/api/farms");
    setFarms(res.data);
  };

  useEffect(() => {
    fetchFarms();
  }, []);

  return (
    <View className="flex-1 p-4 bg-white">
      <TouchableOpacity
        onPress={() => navigation.navigate("Add Farm")}
        className="bg-green-600 p-3 rounded-xl mb-4"
      >
        <Text className="text-white text-center font-bold">Add New Farm</Text>
      </TouchableOpacity>

      <FlatList
        data={farms}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View className="border p-4 mb-3 rounded-lg bg-gray-100">
            <Text className="text-lg font-semibold">{item.name}</Text>
            <Text>Crop: {item.cropType}</Text>
            <Text>Location: {item.location}</Text>
            <Text>Soil Moisture: {item.sensorData?.soilMoisture}%</Text>
          </View>
        )}
      />
    </View>
  );
}
