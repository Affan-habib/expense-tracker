import * as React from "react";
// import { Text, View } from "react-native";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddExpense from "./AddExpense";
import ExpnseList from "./ExpnseList";
import Categories from "./Categories";
import Expenses from "./Expenses";

const Tab = createBottomTabNavigator();
// console.log(Date);
export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../assets/home.png")}
                style={{ width: 20, height: 20 }}
              />
            ),
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#00669a",
            },
          }}
          name="Home"
          component={Expenses}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../assets/budget.png")}
                style={{ width: 20, height: 20 }}
              />
            ),
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#00669a",
            },
          }}
          name="My Expenses"
          component={ExpnseList}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../assets/plus.png")}
                style={{ width: 20, height: 20 }}
              />
            ),
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#00669a",
            },
          }}
          name="Add Expense"
          component={AddExpense}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../assets/category.png")}
                style={{ width: 20, height: 20 }}
              />
            ),
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#00669a",
            },
          }}
          name="Categories"
          component={Categories}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
