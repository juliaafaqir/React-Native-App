import { useEffect } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import io from "socket.io-client"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";


export default function App() {
  return (
      //  <WelcomeScreen /> 
      // <ViewImageScreen />
      <MessagesScreen />
  );
}


