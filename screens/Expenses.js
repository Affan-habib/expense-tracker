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
      <Text style={styles.title}>Your Total Expense is </Text>
      <Text style={styles.cost}>৳ {cost} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    color: '#00669a',
    textAlign: "center",
    padding: 5,
    borderRadius: 10,
  },
  cost: {
    fontSize: 22,
    backgroundColor: '#00669a',
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
    color: "white"
  },
});
