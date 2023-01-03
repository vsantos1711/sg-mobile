import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Telas = createStackNavigator();

import TelaLogin from "./src/screens/Login";
import TelaRegister from "./src/screens/Register";
import TelaHome from "./src/screens/Home";

export default function App() {
  return (
    <NavigationContainer>
      <Telas.Navigator>
        <Telas.Screen name="Login" component={TelaLogin} />
        <Telas.Screen name="Register" component={TelaRegister} />
        {/* <Telas.Screen name="Home" component={TelaHome} /> */}
      </Telas.Navigator>
    </NavigationContainer>
  );
}
