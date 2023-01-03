import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Telas = createStackNavigator();

import TelaLogin from "./src/screens/Login";

export default function App() {
  return (
    <NavigationContainer>
      <Telas.Navigator>
        <Telas.Screen name="Login" component={TelaLogin} />
      </Telas.Navigator>
    </NavigationContainer>
    );
}
