import {
  StyleSheet,
  View,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from "./app/screens/WelcomeScreen"
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {

  return (
    <>
    {/* <WelcomeScreen /> */}
    <ViewImageScreen />
    </>
  );
}


