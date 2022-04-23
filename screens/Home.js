import * as React from "react";
// import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddExpense from "./AddExpense";
import ExpnseList from "./ExpnseList";
import Categories from "./Categories";
import Expenses from "./Expenses";

  const Tab = createBottomTabNavigator();
  
  export default function Home() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Expenses" component={Expenses} />
          <Tab.Screen name="ExpnseList" component={ExpnseList} />
          <Tab.Screen name="AddExpense" component={AddExpense} />
          <Tab.Screen name="Categories" component={Categories} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
