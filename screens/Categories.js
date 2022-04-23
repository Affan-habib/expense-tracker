import { View, Text } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Categories() {
  const categories = useSelector((state) => state.categories);
  console.log(categories);
  return (
    <View>
      {categories.map((category, index) => (
        <View key={index}>
          <Text>{category}</Text>
        </View>
      ))}
    </View>
  );
}
