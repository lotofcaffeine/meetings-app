import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";
import Register from "../pages/Register";

const Auth = createStackNavigator();

const AuthRoute: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#312338" },
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="Register" component={Register} />
    </Auth.Navigator>
  );
};

export default AuthRoute;
