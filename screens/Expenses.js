import { View, Text, StyleSheet ,Image} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
// import DatePicker from "../components/DatePicker";
export default function Expenses() {
  const expenses = useSelector((state) => state.expenses);
  const cost = expenses.reduce((accumulator, object) => {
    return accumulator + object.cost;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.cost}>Total Cost {cost}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#ccc",
  },
  cost: {
    fontSize: 22,
    color: "blue",
    textAlign: "center",
    padding: 40,
    borderRadius: 10,
  },
});
