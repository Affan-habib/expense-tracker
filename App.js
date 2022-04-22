import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import { store } from "./reducers/store";
// import { useSelector, useDispatch } from "react-redux";

// const categories = useSelector((state) => state.categories);

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Home />
    </View>
  );
}

function Categories() {
  const categories = useSelector((state) => state.categories);
  return (
      <>
        <Text>hell</Text>
      </>
    )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="categories" component={Categories} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
