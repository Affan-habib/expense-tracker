import * as React from "react";
// import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddExpense from "./AddExpense";
import AddCategory from "./AddCategory";
import ExpnseList from "./ExpnseList";
import Categories from "./Categories";
import Expenses from "./Expenses";
// import Home from "./screens/Home";
// import { Provider } from "react-redux";
// import { store } from "./reducers/store";
// import { useSelector, useDispatch } from "react-redux";

// const categories = useSelector((state) => state.categories);

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Home />
//     </View>
//   );
// }

// function Categories() {
//   return (
//     <>
//         <Text>ff</Text>
//       </>
//     )
//   }
  
  const Tab = createBottomTabNavigator();
  
  export default function Home() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Expenses" component={Expenses} />
          <Tab.Screen name="ExpnseList" component={ExpnseList} />
          <Tab.Screen name="AddExpense" component={AddExpense} />
          <Tab.Screen name="AddCategory" component={AddCategory} />
          <Tab.Screen name="Categories" component={Categories} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
