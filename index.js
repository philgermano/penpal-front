
import * as React from "react";
import { AppRegistry } from "react-native";
import {DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import App from "./App";
import { name as appName } from "./app.json";
import theme from "./src/theme/default";



export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);