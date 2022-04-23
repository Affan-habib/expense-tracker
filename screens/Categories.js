import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddCategory from "./AddCategory";

export default function Categories() {
  const categories = useSelector((state) => state.categories);
  // console.log(categories);
  return (
    <View style={styles.mainWrapper}>
      <AddCategory />
      <Text style={styles.catWrapper}>All Category</Text>
      <View style={{ flexDirection: "row" }}>
        {categories.map((category, index) => (
          <View key={index}>
            <Text style={styles.categorylist}>{category}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainWrapper: {
    padding: 40,
  },
  categorylist: {
    padding: 10,
    backgroundColor: "grey",
    marginRight: 10,
    marginTop:10,
    fontSize: 16,
    color: 'white',
    borderRadius: 4
  },
  catWrapper: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold"
  }
});
